export interface Post {
  id: number;
  week: number;
  day: string;
  scheduled_date: string;
  platform: 'LinkedIn' | 'Instagram' | 'TikTok';
  author: 'Tim' | 'Dylan' | 'Scafold';
  type: string;
  title: string;
  content: string;
  visual?: string;
  time?: string;
  is_posted: boolean;
  posted_at?: string;
  notes?: string;
  sort_order: number;
  is_custom: boolean;
  created_at: string;
}

export interface ChecklistItem {
  id: number;
  category: 'Setup' | 'Community' | 'Content' | 'Outreach' | 'Ongoing';
  text: string;
  is_checked: boolean;
  checked_at?: string;
  is_custom: boolean;
  sort_order: number;
}

export interface Metric {
  id: number;
  date: string;
  frustrations: number;
  waitlist: number;
  impressions: number;
  countries: number;
  notes?: string;
  created_at: string;
}

export interface PostPerformance {
  id: number;
  post_id: number;
  impressions: number;
  engagements: number;
  clicks: number;
  comments: number;
  shares: number;
  notes?: string;
  logged_at: string;
}

export type Platform = 'All' | 'LinkedIn' | 'Instagram' | 'TikTok';
export type Author = 'All' | 'Tim' | 'Dylan' | 'Scafold';
export type Week = 'All' | 0 | 1 | 2 | 3;
export type PostStatus = 'All' | 'To Post' | 'Posted';
