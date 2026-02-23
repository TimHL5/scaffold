'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useData } from '@/lib/context';
import { Platform, Author, Week, PostStatus } from '@/lib/types';
import { WEEK_LABELS } from '@/lib/data';
import FilterBar from '@/components/hq/FilterBar';
import PostCard from '@/components/hq/PostCard';

export default function TimelinePage() {
  const searchParams = useSearchParams();
  const { posts, togglePosted, updateNotes } = useData();

  const [platform, setPlatform] = useState<Platform>(
    (searchParams.get('platform') as Platform) || 'All'
  );
  const [author, setAuthor] = useState<Author>(
    (searchParams.get('author') as Author) || 'All'
  );
  const [week, setWeek] = useState<Week>('All');
  const [status, setStatus] = useState<PostStatus>('All');
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    return posts.filter(p => {
      if (platform !== 'All' && p.platform !== platform) return false;
      if (author !== 'All' && p.author !== author) return false;
      if (week !== 'All' && p.week !== week) return false;
      if (status === 'Posted' && !p.is_posted) return false;
      if (status === 'To Post' && p.is_posted) return false;
      return true;
    }).sort((a, b) => a.sort_order - b.sort_order);
  }, [posts, platform, author, week, status]);

  const postedCount = filtered.filter(p => p.is_posted).length;

  const groupedByWeek = useMemo(() => {
    const groups: Record<number, typeof filtered> = {};
    filtered.forEach(p => {
      if (!groups[p.week]) groups[p.week] = [];
      groups[p.week].push(p);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => Number(a) - Number(b))
      .map(([w, posts]) => ({ week: Number(w), posts }));
  }, [filtered]);

  const handleBulkPost = () => {
    selectedIds.forEach(id => {
      const post = posts.find(p => p.id === id);
      if (post && !post.is_posted) togglePosted(id);
    });
    setSelectedIds(new Set());
  };

  const handleBulkCopy = async () => {
    const content = filtered
      .filter(p => selectedIds.has(p.id))
      .map(p => p.content)
      .join('\n\n---\n\n');
    try {
      await navigator.clipboard.writeText(content);
    } catch {
      // fallback
    }
  };

  return (
    <div className="min-h-screen">
      <FilterBar
        platform={platform}
        author={author}
        week={week}
        status={status}
        onPlatformChange={setPlatform}
        onAuthorChange={setAuthor}
        onWeekChange={setWeek}
        onStatusChange={setStatus}
        postCount={filtered.length}
        postedCount={postedCount}
      />

      <div className="px-4 py-4 max-w-4xl mx-auto space-y-6">
        {groupedByWeek.map(({ week: w, posts: weekPosts }) => (
          <div key={w}>
            <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Week {w} — {WEEK_LABELS[w] || 'Unknown'}
            </h2>
            <div className="space-y-2">
              {weekPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onTogglePosted={togglePosted}
                  onUpdateNotes={updateNotes}
                />
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">No posts match your filters</p>
          </div>
        )}
      </div>

      {/* Bulk actions */}
      {selectedIds.size > 0 && (
        <div className="fixed bottom-20 md:bottom-4 left-4 right-4 md:left-20 max-w-lg mx-auto bg-card border border-white/[0.1] rounded-lg p-3 flex items-center gap-3 z-50">
          <span className="text-xs text-gray-400">{selectedIds.size} selected</span>
          <div className="flex-1" />
          <button onClick={handleBulkCopy} className="text-xs bg-white/[0.05] px-3 py-1.5 rounded-lg hover:bg-white/[0.1] transition-colors">
            Copy All
          </button>
          <button onClick={handleBulkPost} className="text-xs bg-vermillion/20 text-vermillion px-3 py-1.5 rounded-lg hover:bg-vermillion/30 transition-colors">
            Mark Posted
          </button>
        </div>
      )}
    </div>
  );
}
