'use client';

import { useState } from 'react';
import { Post } from '@/lib/types';
import { PLATFORM_COLORS, AUTHOR_COLORS } from '@/lib/data';
import CopyButton from './CopyButton';

interface PostCardProps {
  post: Post;
  onTogglePosted: (id: number) => void;
  onUpdateNotes: (id: number, notes: string) => void;
}

export default function PostCard({ post, onTogglePosted, onUpdateNotes }: PostCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [notes, setNotes] = useState(post.notes || '');

  const platformColor = PLATFORM_COLORS[post.platform] || '#4361EE';
  const authorColor = AUTHOR_COLORS[post.author] || '#FB923C';

  const handleNotesBlur = () => {
    if (notes !== (post.notes || '')) {
      onUpdateNotes(post.id, notes);
    }
  };

  return (
    <div
      className={`border rounded-lg transition-all ${
        post.is_posted
          ? 'bg-success/[0.03] border-l-2 border-l-success border-success/20'
          : 'bg-white/[0.02] border-white/[0.08]'
      }`}
    >
      {/* Collapsed header */}
      <div
        className="flex items-center gap-3 p-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Posted checkbox */}
        <button
          onClick={(e) => { e.stopPropagation(); onTogglePosted(post.id); }}
          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
            post.is_posted ? 'bg-success border-success' : 'border-gray-600 hover:border-vermillion'
          }`}
        >
          {post.is_posted && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-[10px] font-medium px-1.5 py-0.5 rounded"
              style={{ backgroundColor: platformColor + '20', color: platformColor }}
            >
              {post.platform}
            </span>
            <span
              className="text-[10px] font-medium px-1.5 py-0.5 rounded"
              style={{ backgroundColor: authorColor + '20', color: authorColor }}
            >
              {post.author}
            </span>
            <span className="text-[10px] text-gray-500">{post.day}</span>
            {post.time && <span className="text-[10px] text-gray-500">{post.time}</span>}
            {post.is_posted && (
              <span className="text-[10px] text-success font-medium">Posted</span>
            )}
          </div>
          <p className={`text-sm font-medium text-white truncate ${post.is_posted ? 'line-through opacity-60' : ''}`}>
            #{post.id} — {post.title}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">{post.type}</p>
        </div>

        {/* Actions */}
        <CopyButton text={post.content} />
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="px-3 pb-3 border-t border-white/[0.05] pt-3">
          {post.visual && (
            <div className="bg-purple/10 border border-purple/20 rounded-lg p-3 mb-3">
              <p className="text-[10px] text-purple font-medium uppercase tracking-wider mb-1">Visual Direction</p>
              <p className="text-xs text-gray-300">{post.visual}</p>
            </div>
          )}

          <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans leading-relaxed mb-3 max-h-80 overflow-y-auto">
            {post.content}
          </pre>

          <CopyButton text={post.content} variant="full" className="mb-3" />

          <button
            onClick={() => onTogglePosted(post.id)}
            className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-colors mb-3 ${
              post.is_posted
                ? 'bg-success/10 text-success border border-success/20 hover:bg-success/20'
                : 'bg-white/[0.05] text-white border border-white/[0.08] hover:bg-white/[0.08]'
            }`}
          >
            {post.is_posted ? 'Marked as Posted' : 'Mark as Posted'}
          </button>

          {post.is_posted && post.posted_at && (
            <p className="text-xs text-gray-500 mb-3">
              Posted on {new Date(post.posted_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
            </p>
          )}

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            onBlur={handleNotesBlur}
            placeholder="Add notes..."
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-gray-300 placeholder-gray-600 resize-none focus:outline-none focus:border-vermillion/30 transition-colors"
            rows={2}
          />
        </div>
      )}
    </div>
  );
}
