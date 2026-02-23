'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Post, ChecklistItem, Metric } from './types';
import { SEED_POSTS, SEED_CHECKLIST } from './data';

interface DataContextType {
  posts: Post[];
  checklist: ChecklistItem[];
  metrics: Metric[];
  togglePosted: (id: number) => void;
  toggleChecked: (id: number) => void;
  updateNotes: (id: number, notes: string) => void;
  addMetric: (metric: Omit<Metric, 'id' | 'created_at'>) => void;
  updateMetric: (date: string, field: keyof Pick<Metric, 'frustrations' | 'waitlist' | 'impressions' | 'countries'>, value: number) => void;
  addPost: (post: Omit<Post, 'id' | 'created_at' | 'sort_order'>) => void;
  addChecklistItem: (category: ChecklistItem['category'], text: string) => void;
  getLatestMetric: () => Metric | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  posts: 'hq_posts',
  checklist: 'hq_checklist',
  metrics: 'hq_metrics',
};

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const storedPosts = localStorage.getItem(STORAGE_KEYS.posts);
    const storedChecklist = localStorage.getItem(STORAGE_KEYS.checklist);
    const storedMetrics = localStorage.getItem(STORAGE_KEYS.metrics);

    setPosts(storedPosts ? JSON.parse(storedPosts) : SEED_POSTS);
    setChecklist(storedChecklist ? JSON.parse(storedChecklist) : SEED_CHECKLIST);
    setMetrics(storedMetrics ? JSON.parse(storedMetrics) : []);
    setLoaded(true);
  }, []);

  // Persist to localStorage on changes
  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEYS.posts, JSON.stringify(posts));
  }, [posts, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(checklist));
  }, [checklist, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEYS.metrics, JSON.stringify(metrics));
  }, [metrics, loaded]);

  const togglePosted = useCallback((id: number) => {
    setPosts(prev => prev.map(p =>
      p.id === id
        ? { ...p, is_posted: !p.is_posted, posted_at: !p.is_posted ? new Date().toISOString() : undefined }
        : p
    ));
  }, []);

  const toggleChecked = useCallback((id: number) => {
    setChecklist(prev => prev.map(c =>
      c.id === id
        ? { ...c, is_checked: !c.is_checked, checked_at: !c.is_checked ? new Date().toISOString() : undefined }
        : c
    ));
  }, []);

  const updateNotes = useCallback((id: number, notes: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, notes } : p));
  }, []);

  const addMetric = useCallback((metric: Omit<Metric, 'id' | 'created_at'>) => {
    setMetrics(prev => {
      const existing = prev.find(m => m.date === metric.date);
      if (existing) {
        return prev.map(m => m.date === metric.date ? { ...m, ...metric } : m);
      }
      return [...prev, { ...metric, id: Date.now(), created_at: new Date().toISOString() }];
    });
  }, []);

  const updateMetric = useCallback((date: string, field: keyof Pick<Metric, 'frustrations' | 'waitlist' | 'impressions' | 'countries'>, value: number) => {
    setMetrics(prev => {
      const existing = prev.find(m => m.date === date);
      if (existing) {
        return prev.map(m => m.date === date ? { ...m, [field]: value } : m);
      }
      const newMetric: Metric = {
        id: Date.now(),
        date,
        frustrations: 0,
        waitlist: 0,
        impressions: 0,
        countries: 0,
        created_at: new Date().toISOString(),
        [field]: value,
      };
      return [...prev, newMetric];
    });
  }, []);

  const addPost = useCallback((post: Omit<Post, 'id' | 'created_at' | 'sort_order'>) => {
    setPosts(prev => [
      ...prev,
      {
        ...post,
        id: Date.now(),
        sort_order: prev.length + 1,
        created_at: new Date().toISOString(),
      },
    ]);
  }, []);

  const addChecklistItem = useCallback((category: ChecklistItem['category'], text: string) => {
    setChecklist(prev => [
      ...prev,
      {
        id: Date.now(),
        category,
        text,
        is_checked: false,
        is_custom: true,
        sort_order: prev.length + 1,
      },
    ]);
  }, []);

  const getLatestMetric = useCallback(() => {
    if (metrics.length === 0) return undefined;
    return [...metrics].sort((a, b) => b.date.localeCompare(a.date))[0];
  }, [metrics]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-vermillion border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <DataContext.Provider value={{
      posts, checklist, metrics,
      togglePosted, toggleChecked, updateNotes,
      addMetric, updateMetric, addPost, addChecklistItem,
      getLatestMetric,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
}
