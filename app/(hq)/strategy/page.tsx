'use client';

import { useState } from 'react';
import CopyButton from '@/components/hq/CopyButton';

const VOICES = [
  {
    name: 'Tim Liu (CFO)',
    voice: 'Analytical, personal, build-in-public. Combines data with storytelling. Reflects on career decisions, YC applications, and the journey of building Scafold.',
    cadence: '3-4 posts/week on LinkedIn, 1-2 IG stories',
    platform: 'LinkedIn',
    dos: ['Share real numbers and metrics', 'Be vulnerable about challenges', 'Connect BC/student life to building', 'Reference PwC decision authentically'],
    donts: ['Don\'t brag or flex', 'Don\'t use corporate jargon', 'Don\'t post without data to back claims'],
  },
  {
    name: 'Dylan Kim (CEO)',
    voice: 'Bold, contrarian, visionary. Challenges conventional thinking about AI and startups. Draws on international experience across 7 countries.',
    cadence: '2-3 posts/week on LinkedIn',
    platform: 'LinkedIn',
    dos: ['Challenge AI hype with substance', 'Reference global perspective', 'Make bold claims backed by data', 'Talk about moats and strategy'],
    donts: ['Don\'t be negative without offering alternatives', 'Don\'t ignore comments/engagement', 'Don\'t over-promise on product capabilities'],
  },
  {
    name: 'Scafold (Brand)',
    voice: 'Clean, editorial, data-driven. The brand speaks through frustrations, data visualizations, and weekly reports. Never salesy — always value-first.',
    cadence: '5-6 posts/week across LinkedIn + Instagram',
    platform: 'LinkedIn + Instagram',
    dos: ['Lead with real frustration data', 'Make every post provide value', 'Use consistent visual identity', 'End with clear CTA to scafold.ai'],
    donts: ['Don\'t use emojis excessively', 'Don\'t be generic or corporate', 'Don\'t post without substance'],
  },
];

const PILLARS = [
  { num: 1, name: 'What Bugs You?', desc: 'Frustration spotlights from real submissions. The core hook that drives everything.' },
  { num: 2, name: 'AI Lies', desc: 'Contrarian takes on AI hype. What ChatGPT and other tools get wrong about building startups.' },
  { num: 3, name: 'From Pain to Plan', desc: 'Show the Scafold pipeline in action. Take a frustration, analyze it, reveal the opportunity.' },
  { num: 4, name: 'The Numbers', desc: 'Real metrics, real traction. Weekly reports, milestone posts, transparent data sharing.' },
  { num: 5, name: 'Build in Public', desc: 'Behind-the-scenes of building Scafold. The YC app, the PwC decision, the late nights.' },
];

const PLAYBOOKS = [
  {
    platform: 'LinkedIn',
    color: '#4361EE',
    times: 'Tue-Thu 8-10 AM ET, Sat 8 AM ET',
    wordCount: '150-300 words (sweet spot: 200)',
    formats: ['Personal story + insight', 'Data hook + analysis', 'Frustration of the Day', 'Build in public updates', 'Weekly trend reports'],
    hashtags: '#WhatBugsYou #scafold #buildinpublic #startups #AI',
  },
  {
    platform: 'Instagram',
    color: '#EC4899',
    times: 'Mon/Wed/Fri 12 PM ET, Stories daily',
    wordCount: 'Caption: 50-100 words. Visual does the heavy lifting.',
    formats: ['Data cards with stats', 'Behind-the-scenes photos', 'Visual quotes from frustrations', 'Comparison graphics', 'Story polls'],
    hashtags: '#WhatBugsYou #scafold #AI #startup #buildinpublic',
  },
  {
    platform: 'TikTok',
    color: '#7C3AED',
    times: 'Testing: 3-5 PM ET weekdays',
    wordCount: '15-60 second videos',
    formats: ['Hot take to camera', 'Frustration reaction videos', 'Data reveals with text overlay', '"Things ChatGPT can\'t do" series', 'Day in the life of a founder'],
    hashtags: '#WhatBugsYou #scafold #startup #tech #AI',
  },
];

const TARGETS = [
  { metric: 'Waitlist Signups', d30: '2,000', d60: '5,000', d90: '10,000' },
  { metric: 'Frustrations Collected', d30: '1,500', d60: '4,000', d90: '8,000' },
  { metric: 'Social Impressions', d30: '500K', d60: '2M', d90: '5M+' },
  { metric: 'LinkedIn Followers', d30: '500', d60: '2,000', d90: '5,000' },
];

const HASHTAGS = ['#WhatBugsYou', '#ScafoldThis', '#FrustrationOfTheDay', '#buildinpublic', '#scafold', '#startups', '#AI', '#YCombinator'];

export default function StrategyPage() {
  const [expandedPlaybook, setExpandedPlaybook] = useState<string | null>(null);

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Strategy Guide</h1>
        <p className="text-xs text-gray-500 mt-0.5">Reference for the &ldquo;What Bugs You?&rdquo; campaign</p>
      </div>

      {/* Brand Voices */}
      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Brand Voices</h2>
        <div className="space-y-3">
          {VOICES.map((v) => (
            <div key={v.name} className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-1">{v.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{v.voice}</p>
              <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-3">
                <span>Cadence: {v.cadence}</span>
                <span>Primary: {v.platform}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] text-success font-medium mb-1">Do&apos;s</p>
                  {v.dos.map((d, i) => (
                    <p key={i} className="text-[11px] text-gray-400 mb-0.5">+ {d}</p>
                  ))}
                </div>
                <div>
                  <p className="text-[10px] text-vermillion font-medium mb-1">Don&apos;ts</p>
                  {v.donts.map((d, i) => (
                    <p key={i} className="text-[11px] text-gray-400 mb-0.5">- {d}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Pillars */}
      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Content Pillars</h2>
        <div className="space-y-2">
          {PILLARS.map((p) => (
            <div key={p.num} className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4 flex gap-3">
              <span className="text-vermillion font-bold text-sm">{p.num}</span>
              <div>
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Playbooks */}
      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Platform Playbooks</h2>
        <div className="space-y-2">
          {PLAYBOOKS.map((pb) => (
            <div key={pb.platform} className="bg-white/[0.02] border border-white/[0.08] rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedPlaybook(expandedPlaybook === pb.platform ? null : pb.platform)}
                className="w-full flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-medium" style={{ color: pb.color }}>{pb.platform}</span>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform ${expandedPlaybook === pb.platform ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedPlaybook === pb.platform && (
                <div className="border-t border-white/[0.05] p-4 space-y-3">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">Best Times</p>
                    <p className="text-xs text-gray-300">{pb.times}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">Length</p>
                    <p className="text-xs text-gray-300">{pb.wordCount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">Formats</p>
                    {pb.formats.map((f, i) => (
                      <p key={i} className="text-xs text-gray-300">- {f}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">Hashtags</p>
                    <p className="text-xs text-gray-300">{pb.hashtags}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Targets */}
      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Targets</h2>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-0 text-[10px] uppercase text-gray-500 font-medium p-3 border-b border-white/[0.05]">
            <span>Metric</span>
            <span className="text-center">30 Day</span>
            <span className="text-center">60 Day</span>
            <span className="text-center">90 Day</span>
          </div>
          {TARGETS.map((t) => (
            <div key={t.metric} className="grid grid-cols-4 gap-0 text-xs p-3 border-b border-white/[0.03] last:border-0">
              <span className="text-gray-300">{t.metric}</span>
              <span className="text-center text-gray-400">{t.d30}</span>
              <span className="text-center text-gray-400">{t.d60}</span>
              <span className="text-center text-warning font-medium">{t.d90}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Decision Framework */}
      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Decision Framework</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-success/[0.05] border border-success/20 rounded-lg p-4">
            <p className="text-xs font-medium text-success mb-2">Double Down Signals</p>
            <p className="text-[11px] text-gray-400 mb-1">+ Engagement rate &gt;5%</p>
            <p className="text-[11px] text-gray-400 mb-1">+ Submission rate &gt;30%</p>
            <p className="text-[11px] text-gray-400">+ Organic sharing &gt;10%</p>
          </div>
          <div className="bg-vermillion/[0.05] border border-vermillion/20 rounded-lg p-4">
            <p className="text-xs font-medium text-vermillion mb-2">Pivot Signals</p>
            <p className="text-[11px] text-gray-400 mb-1">- Engagement rate &lt;1%</p>
            <p className="text-[11px] text-gray-400 mb-1">- Submission rate &lt;10%</p>
            <p className="text-[11px] text-gray-400">- Declining traffic WoW</p>
          </div>
        </div>
      </section>

      {/* Viral Mechanics */}
      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Viral Mechanics</h2>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
          <p className="text-[10px] text-gray-500 uppercase mb-2">Core Loop</p>
          <div className="flex items-center gap-2 flex-wrap text-xs text-gray-300">
            <span className="bg-vermillion/10 text-vermillion px-2 py-1 rounded">Frustration</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-white/[0.05] px-2 py-1 rounded">&ldquo;Wow&rdquo; moment</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-electric/10 text-electric px-2 py-1 rounded">Share</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-white/[0.05] px-2 py-1 rounded">Friends see</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-success/10 text-success px-2 py-1 rounded">They submit</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="text-vermillion">Repeat</span>
          </div>
          <p className="text-[10px] text-gray-500 uppercase mt-4 mb-2">Cross-Platform Flow</p>
          <div className="flex items-center gap-2 flex-wrap text-xs text-gray-300">
            <span className="bg-purple/10 text-purple px-2 py-1 rounded">TikTok</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-vermillion/10 text-vermillion px-2 py-1 rounded">scafold.ai</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-success/10 text-success px-2 py-1 rounded">Submit</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-pink/10 text-pink px-2 py-1 rounded">IG Story</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="bg-electric/10 text-electric px-2 py-1 rounded">LinkedIn</span>
            <span className="text-gray-600">&rarr;</span>
            <span className="text-vermillion">Repeat</span>
          </div>
        </div>
      </section>

      {/* Hashtag Bank */}
      <section>
        <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Hashtag Bank</h2>
        <div className="flex flex-wrap gap-2">
          {HASHTAGS.map((tag) => (
            <div key={tag} className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-lg px-2 py-1">
              <span className="text-xs text-gray-300">{tag}</span>
              <CopyButton text={tag} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
