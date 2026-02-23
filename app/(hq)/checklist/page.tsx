'use client';

import { useMemo, useState } from 'react';
import { useData } from '@/lib/context';
import { ChecklistItem } from '@/lib/types';

const CATEGORY_ORDER = ['Setup', 'Community', 'Content', 'Outreach', 'Ongoing'] as const;
const CATEGORY_LABELS: Record<string, string> = {
  Setup: 'Setup',
  Community: 'Community',
  Content: 'Content Templates',
  Outreach: 'Outreach',
  Ongoing: 'Ongoing Habits',
};

export default function ChecklistPage() {
  const { checklist, toggleChecked, addChecklistItem } = useData();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [addingTo, setAddingTo] = useState<string | null>(null);
  const [newItemText, setNewItemText] = useState('');

  const totalChecked = checklist.filter(c => c.is_checked).length;
  const progress = checklist.length > 0 ? (totalChecked / checklist.length) * 100 : 0;

  const grouped = useMemo(() => {
    const groups: Record<string, ChecklistItem[]> = {};
    checklist.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return CATEGORY_ORDER.map(cat => ({
      category: cat,
      items: groups[cat] || [],
    }));
  }, [checklist]);

  const handleAddItem = (category: string) => {
    if (!newItemText.trim()) return;
    addChecklistItem(category as ChecklistItem['category'], newItemText.trim());
    setNewItemText('');
    setAddingTo(null);
  };

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Launch Checklist</h1>
        <p className="text-xs text-gray-500 mt-0.5">Track readiness for the &ldquo;What Bugs You?&rdquo; campaign</p>
      </div>

      {/* Overall progress */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">{totalChecked}/{checklist.length} complete</span>
          <span className="text-sm font-medium text-vermillion">{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-white/[0.05] rounded-full overflow-hidden">
          <div
            className="h-full bg-vermillion rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Categories */}
      {grouped.map(({ category, items }) => {
        const isCollapsed = collapsed[category];
        const catChecked = items.filter(i => i.is_checked).length;

        return (
          <div key={category} className="bg-white/[0.02] border border-white/[0.08] rounded-lg overflow-hidden">
            <button
              onClick={() => setCollapsed(prev => ({ ...prev, [category]: !prev[category] }))}
              className="w-full flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3">
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform ${isCollapsed ? '' : 'rotate-90'}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-sm font-medium">{CATEGORY_LABELS[category]}</span>
              </div>
              <span className="text-xs text-gray-500">{catChecked}/{items.length}</span>
            </button>

            {!isCollapsed && (
              <div className="border-t border-white/[0.05] px-4 py-2">
                {items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-start gap-3 py-2 cursor-pointer group"
                  >
                    <button
                      onClick={() => toggleChecked(item.id)}
                      className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors ${
                        item.is_checked
                          ? 'bg-success border-success'
                          : 'border-gray-600 group-hover:border-warning'
                      }`}
                    >
                      {item.is_checked && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                    <span className={`text-sm ${item.is_checked ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                      {item.text}
                    </span>
                  </label>
                ))}

                {addingTo === category ? (
                  <div className="flex items-center gap-2 py-2">
                    <input
                      type="text"
                      value={newItemText}
                      onChange={(e) => setNewItemText(e.target.value)}
                      placeholder="New item..."
                      className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded px-3 py-1.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-vermillion/30"
                      autoFocus
                      onKeyDown={(e) => { if (e.key === 'Enter') handleAddItem(category); if (e.key === 'Escape') { setAddingTo(null); setNewItemText(''); } }}
                    />
                    <button
                      onClick={() => handleAddItem(category)}
                      className="text-xs bg-vermillion/20 text-vermillion px-3 py-1.5 rounded hover:bg-vermillion/30 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setAddingTo(category)}
                    className="flex items-center gap-2 py-2 text-xs text-gray-500 hover:text-gray-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add item
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
