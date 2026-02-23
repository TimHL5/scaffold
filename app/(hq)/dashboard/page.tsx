'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useData } from '@/lib/context';
import { PLATFORM_COLORS, AUTHOR_COLORS, WEEK_LABELS } from '@/lib/data';
import ProgressRing from '@/components/hq/ProgressRing';
import CopyButton from '@/components/hq/CopyButton';

const TARGETS = {
  frustrations: 1500,
  waitlist: 2000,
  impressions: 500000,
  countries: 7,
};

const METRIC_LABELS: Record<string, string> = {
  frustrations: 'Frustrations',
  waitlist: 'Waitlist',
  impressions: 'Impressions',
  countries: 'Countries',
};

function getCampaignPhase(): string {
  const launch = new Date('2026-03-01');
  const now = new Date();
  const diff = Math.floor((now.getTime() - launch.getTime()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return 'Pre-Launch';
  if (diff < 7) return 'Launch';
  if (diff < 14) return 'Sustain';
  return 'Scale';
}

function getDaysSinceLaunch(): number {
  const launch = new Date('2026-03-01');
  const now = new Date();
  return Math.floor((now.getTime() - launch.getTime()) / (1000 * 60 * 60 * 24));
}

export default function DashboardPage() {
  const { posts, checklist, metrics, togglePosted, updateMetric, getLatestMetric } = useData();

  const postedCount = posts.filter(p => p.is_posted).length;
  const checkedCount = checklist.filter(c => c.is_checked).length;
  const latestMetric = getLatestMetric();

  const today = new Date().toISOString().split('T')[0];

  const [editingMetric, setEditingMetric] = useState<string | null>(null);
  const [metricValue, setMetricValue] = useState('');

  const platformStats = useMemo(() => {
    const platforms = ['LinkedIn', 'Instagram', 'TikTok'] as const;
    return platforms.map(p => ({
      name: p,
      total: posts.filter(post => post.platform === p).length,
      posted: posts.filter(post => post.platform === p && post.is_posted).length,
      color: PLATFORM_COLORS[p],
    }));
  }, [posts]);

  const authorStats = useMemo(() => {
    const authors = ['Tim', 'Dylan', 'Scafold'] as const;
    return authors.map(a => ({
      name: a,
      total: posts.filter(post => post.author === a).length,
      posted: posts.filter(post => post.author === a && post.is_posted).length,
      color: AUTHOR_COLORS[a],
    }));
  }, [posts]);

  const nextUp = useMemo(() => {
    return posts
      .filter(p => !p.is_posted)
      .sort((a, b) => a.scheduled_date.localeCompare(b.scheduled_date) || a.sort_order - b.sort_order)
      .slice(0, 3);
  }, [posts]);

  const handleMetricSave = (field: string) => {
    const val = parseInt(metricValue) || 0;
    updateMetric(today, field as 'frustrations' | 'waitlist' | 'impressions' | 'countries', val);
    setEditingMetric(null);
  };

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Campaign HQ</h1>
          <p className="text-xs text-gray-500 mt-0.5">What Bugs You? — {getCampaignPhase()}</p>
        </div>
        <div className="w-9 h-9 bg-vermillion rounded-lg flex items-center justify-center">
          <span className="text-white text-sm font-bold">S</span>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 flex items-center gap-3">
          <ProgressRing progress={posts.length > 0 ? (postedCount / posts.length) * 100 : 0} size={48} />
          <div>
            <p className="text-lg font-semibold">{postedCount}/{posts.length}</p>
            <p className="text-[10px] text-gray-500">Posts Done</p>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 flex items-center gap-3">
          <ProgressRing progress={checklist.length > 0 ? (checkedCount / checklist.length) * 100 : 0} size={48} color="#F59E0B" />
          <div>
            <p className="text-lg font-semibold">{checkedCount}/{checklist.length}</p>
            <p className="text-[10px] text-gray-500">Checklist</p>
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
          <p className="text-2xl font-semibold">{getDaysSinceLaunch()}</p>
          <p className="text-[10px] text-gray-500">Days {getDaysSinceLaunch() >= 0 ? 'Since' : 'Until'} Launch</p>
        </div>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
          <p className="text-lg font-semibold">{getCampaignPhase()}</p>
          <p className="text-[10px] text-gray-500">Current Phase</p>
        </div>
      </div>

      {/* Platform Progress */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
        <h2 className="text-sm font-medium mb-3">Platform Progress</h2>
        <div className="space-y-3">
          {platformStats.map(({ name, total, posted, color }) => (
            <Link key={name} href={`/timeline?platform=${name}`} className="block group">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs" style={{ color }}>{name}</span>
                <span className="text-[10px] text-gray-500">{posted}/{total}</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${total > 0 ? (posted / total) * 100 : 0}%`, backgroundColor: color }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Author Progress */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
        <h2 className="text-sm font-medium mb-3">Author Progress</h2>
        <div className="space-y-3">
          {authorStats.map(({ name, total, posted, color }) => (
            <Link key={name} href={`/timeline?author=${name}`} className="block group">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-xs text-gray-300">{name}</span>
                </div>
                <span className="text-[10px] text-gray-500">{posted}/{total}</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${total > 0 ? (posted / total) * 100 : 0}%`, backgroundColor: color }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Live Metrics */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
        <h2 className="text-sm font-medium mb-3">Live Metrics</h2>
        <div className="grid grid-cols-2 gap-3">
          {(Object.keys(TARGETS) as Array<keyof typeof TARGETS>).map((key) => {
            const current = latestMetric ? latestMetric[key] : 0;
            const target = TARGETS[key];
            const progress = Math.min((current / target) * 100, 100);
            const isEditing = editingMetric === key;

            return (
              <div key={key} className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-3">
                <p className="text-[10px] text-gray-500 mb-1">{METRIC_LABELS[key]}</p>
                {isEditing ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      value={metricValue}
                      onChange={(e) => setMetricValue(e.target.value)}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded px-2 py-1 text-sm text-white focus:outline-none"
                      autoFocus
                      onKeyDown={(e) => { if (e.key === 'Enter') handleMetricSave(key); if (e.key === 'Escape') setEditingMetric(null); }}
                      onBlur={() => handleMetricSave(key)}
                    />
                  </div>
                ) : (
                  <p
                    className="text-lg font-semibold cursor-pointer hover:text-vermillion transition-colors"
                    onClick={() => { setEditingMetric(key); setMetricValue(String(current)); }}
                  >
                    {key === 'impressions' ? (current >= 1000 ? `${(current / 1000).toFixed(0)}K` : current) : current}
                  </p>
                )}
                <p className="text-[10px] text-gray-600 mb-1">
                  Target: {key === 'impressions' ? '500K' : target.toLocaleString()}{key === 'countries' ? '+' : ''}
                </p>
                <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-vermillion rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Up */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
        <h2 className="text-sm font-medium mb-3">Next Up</h2>
        {nextUp.length === 0 ? (
          <p className="text-xs text-gray-500">All posts completed!</p>
        ) : (
          <div className="space-y-2">
            {nextUp.map((post) => (
              <div key={post.id} className="flex items-center gap-3 p-2 bg-white/[0.02] rounded-lg">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                      style={{ backgroundColor: PLATFORM_COLORS[post.platform] + '20', color: PLATFORM_COLORS[post.platform] }}
                    >
                      {post.platform}
                    </span>
                    <span className="text-[10px] text-gray-500">{post.day}</span>
                  </div>
                  <p className="text-sm font-medium truncate">#{post.id} — {post.title}</p>
                </div>
                <CopyButton text={post.content} />
                <button
                  onClick={() => togglePosted(post.id)}
                  className="text-[10px] bg-white/[0.05] hover:bg-vermillion/10 hover:text-vermillion px-2 py-1 rounded transition-colors whitespace-nowrap"
                >
                  Post
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { href: '/timeline', label: 'Full Timeline', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
          { href: '/checklist', label: 'Launch Checklist', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
          { href: '/strategy', label: 'Strategy Guide', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
          { href: '/analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
        ].map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 flex items-center gap-3 hover:bg-white/[0.04] transition-colors"
          >
            <svg className="w-5 h-5 text-vermillion flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
            </svg>
            <span className="text-sm font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
