'use client';

import { useMemo, useState } from 'react';
import { useData } from '@/lib/context';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid,
} from 'recharts';

export default function AnalyticsPage() {
  const { metrics, posts, addMetric } = useData();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    frustrations: '',
    waitlist: '',
    impressions: '',
    countries: '',
  });

  const sortedMetrics = useMemo(
    () => [...metrics].sort((a, b) => a.date.localeCompare(b.date)),
    [metrics]
  );

  const chartData = useMemo(() => {
    return sortedMetrics.map(m => ({
      date: new Date(m.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      frustrations: m.frustrations,
      waitlist: m.waitlist,
      impressions: m.impressions,
      countries: m.countries,
    }));
  }, [sortedMetrics]);

  const postedPosts = useMemo(() => {
    return posts.filter(p => p.is_posted).sort((a, b) => (b.posted_at || '').localeCompare(a.posted_at || ''));
  }, [posts]);

  const platformData = useMemo(() => {
    const platforms = ['LinkedIn', 'Instagram', 'TikTok'] as const;
    return platforms.map(p => ({
      name: p,
      total: posts.filter(post => post.platform === p).length,
      posted: posts.filter(post => post.platform === p && post.is_posted).length,
    }));
  }, [posts]);

  const handleLogNumbers = () => {
    const today = new Date().toISOString().split('T')[0];
    addMetric({
      date: today,
      frustrations: parseInt(formData.frustrations) || 0,
      waitlist: parseInt(formData.waitlist) || 0,
      impressions: parseInt(formData.impressions) || 0,
      countries: parseInt(formData.countries) || 0,
    });
    setShowModal(false);
    setFormData({ frustrations: '', waitlist: '', impressions: '', countries: '' });
  };

  const generateWeeklyReport = () => {
    const latest = sortedMetrics[sortedMetrics.length - 1];
    if (!latest) return 'No metrics data yet. Log some numbers first!';

    const topPosts = postedPosts.slice(0, 3).map(p => `→ "${p.title}" (${p.platform})`).join('\n');
    return `Scafold launch — Week update numbers:

${latest.frustrations} frustrations collected
${latest.waitlist} emails on waitlist
${latest.countries} countries
${latest.impressions.toLocaleString()} social impressions

What's working:
${topPosts || '→ [No posted content yet]'}

What's not working:
→ [Fill in based on lowest performing]

#buildinpublic #scafold #WhatBugsYou`;
  };

  const [reportCopied, setReportCopied] = useState(false);
  const handleCopyReport = async () => {
    const report = generateWeeklyReport();
    await navigator.clipboard.writeText(report);
    setReportCopied(true);
    setTimeout(() => setReportCopied(false), 2000);
  };

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; color: string; dataKey: string }>; label?: string }) => {
    if (!active || !payload) return null;
    return (
      <div className="bg-card border border-white/[0.1] rounded-lg p-2 text-xs">
        <p className="text-gray-400 mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>{p.dataKey}: {p.value.toLocaleString()}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Analytics</h1>
          <p className="text-xs text-gray-500 mt-0.5">Performance tracking for the campaign</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-vermillion hover:bg-vermillion/90 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors"
        >
          Log Numbers
        </button>
      </div>

      {/* Metrics charts */}
      {chartData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { key: 'frustrations', label: 'Frustrations', color: '#E94560' },
            { key: 'waitlist', label: 'Waitlist', color: '#4361EE' },
            { key: 'impressions', label: 'Impressions', color: '#10B981' },
            { key: 'countries', label: 'Countries', color: '#F59E0B' },
          ].map(({ key, label, color }) => (
            <div key={key} className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-3">{label}</p>
              <ResponsiveContainer width="100%" height={140}>
                <LineChart data={chartData}>
                  <XAxis dataKey="date" tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} width={40} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey={key} stroke={color} strokeWidth={2} dot={{ fill: color, r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-8 text-center">
          <p className="text-gray-500 text-sm mb-2">No metrics data yet</p>
          <p className="text-gray-600 text-xs">Click &ldquo;Log Numbers&rdquo; to start tracking</p>
        </div>
      )}

      {/* Platform Comparison */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
        <p className="text-xs text-gray-500 mb-3">Platform Comparison</p>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={platformData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6B7280', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="total" fill="rgba(255,255,255,0.1)" name="Total" radius={[4, 4, 0, 0]} />
            <Bar dataKey="posted" fill="#E94560" name="Posted" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Post Performance Table */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg overflow-hidden">
        <div className="p-4 border-b border-white/[0.05]">
          <p className="text-sm font-medium">Posted Content</p>
        </div>
        {postedPosts.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-gray-500 text-xs">No posts marked as posted yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-500 border-b border-white/[0.05]">
                  <th className="text-left p-3 font-medium">#</th>
                  <th className="text-left p-3 font-medium">Title</th>
                  <th className="text-left p-3 font-medium">Platform</th>
                  <th className="text-left p-3 font-medium">Author</th>
                  <th className="text-left p-3 font-medium">Posted</th>
                </tr>
              </thead>
              <tbody>
                {postedPosts.map((post) => (
                  <tr key={post.id} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                    <td className="p-3 text-gray-400">{post.id}</td>
                    <td className="p-3 text-gray-300">{post.title}</td>
                    <td className="p-3 text-gray-400">{post.platform}</td>
                    <td className="p-3 text-gray-400">{post.author}</td>
                    <td className="p-3 text-gray-500">
                      {post.posted_at ? new Date(post.posted_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Weekly Report Generator */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium">Weekly Report Generator</p>
          <button
            onClick={handleCopyReport}
            className="bg-white/[0.05] hover:bg-white/[0.08] text-xs px-3 py-1.5 rounded-lg transition-colors"
          >
            {reportCopied ? 'Copied!' : 'Generate & Copy'}
          </button>
        </div>
        <pre className="text-xs text-gray-400 whitespace-pre-wrap bg-white/[0.02] rounded-lg p-3 font-sans">
          {generateWeeklyReport()}
        </pre>
      </div>

      {/* Log Numbers Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4" onClick={() => setShowModal(false)}>
          <div className="bg-surface border border-white/[0.1] rounded-lg p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-sm font-semibold mb-4">Log Today&apos;s Numbers</h3>
            <div className="space-y-3">
              {[
                { key: 'frustrations', label: 'Frustrations Collected' },
                { key: 'waitlist', label: 'Waitlist Signups' },
                { key: 'impressions', label: 'Social Impressions' },
                { key: 'countries', label: 'Countries' },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="text-[10px] text-gray-500 uppercase">{label}</label>
                  <input
                    type="number"
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) => setFormData(prev => ({ ...prev, [key]: e.target.value }))}
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white mt-1 focus:outline-none focus:border-vermillion/30"
                    placeholder="0"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-white/[0.05] text-gray-300 text-sm py-2 rounded-lg hover:bg-white/[0.08] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleLogNumbers}
                className="flex-1 bg-vermillion text-white text-sm py-2 rounded-lg hover:bg-vermillion/90 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
