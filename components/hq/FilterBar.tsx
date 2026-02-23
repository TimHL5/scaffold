'use client';

import { Platform, Author, Week, PostStatus } from '@/lib/types';

interface FilterBarProps {
  platform: Platform;
  author: Author;
  week: Week;
  status: PostStatus;
  onPlatformChange: (p: Platform) => void;
  onAuthorChange: (a: Author) => void;
  onWeekChange: (w: Week) => void;
  onStatusChange: (s: PostStatus) => void;
  postCount: number;
  postedCount: number;
}

const PLATFORMS: Platform[] = ['All', 'LinkedIn', 'Instagram', 'TikTok'];
const AUTHORS: Author[] = ['All', 'Tim', 'Dylan', 'Scafold'];
const WEEKS: { value: Week; label: string }[] = [
  { value: 'All', label: 'All' },
  { value: 0, label: 'W0' },
  { value: 1, label: 'W1' },
  { value: 2, label: 'W2' },
  { value: 3, label: 'W3-4' },
];
const STATUSES: PostStatus[] = ['All', 'To Post', 'Posted'];

function Chip({
  active,
  onClick,
  children,
  color,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
        active
          ? 'text-white'
          : 'text-gray-400 bg-white/[0.03] hover:bg-white/[0.06]'
      }`}
      style={active ? { backgroundColor: (color || '#E94560') + '20', color: color || '#E94560' } : undefined}
    >
      {children}
    </button>
  );
}

const PLATFORM_COLORS: Record<string, string> = {
  All: '#E94560',
  LinkedIn: '#4361EE',
  Instagram: '#EC4899',
  TikTok: '#7C3AED',
};

export default function FilterBar({
  platform, author, week, status,
  onPlatformChange, onAuthorChange, onWeekChange, onStatusChange,
  postCount, postedCount,
}: FilterBarProps) {
  return (
    <div className="bg-surface/80 backdrop-blur-sm border-b border-white/[0.08] sticky top-0 z-40 px-4 py-3 space-y-2">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {PLATFORMS.map((p) => (
          <Chip key={p} active={platform === p} onClick={() => onPlatformChange(p)} color={PLATFORM_COLORS[p]}>
            {p}
          </Chip>
        ))}
        <div className="w-px bg-white/[0.08] mx-1 self-stretch" />
        {AUTHORS.map((a) => (
          <Chip key={a} active={author === a} onClick={() => onAuthorChange(a)}>
            {a}
          </Chip>
        ))}
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {WEEKS.map((w) => (
          <Chip key={String(w.value)} active={week === w.value} onClick={() => onWeekChange(w.value)}>
            {w.label}
          </Chip>
        ))}
        <div className="w-px bg-white/[0.08] mx-1 self-stretch" />
        {STATUSES.map((s) => (
          <Chip key={s} active={status === s} onClick={() => onStatusChange(s)} color={s === 'Posted' ? '#10B981' : undefined}>
            {s}
          </Chip>
        ))}
        <span className="text-[10px] text-gray-500 ml-auto whitespace-nowrap">{postCount} posts &middot; {postedCount} posted</span>
      </div>
    </div>
  );
}
