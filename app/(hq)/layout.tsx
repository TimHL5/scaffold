import { DataProvider } from '@/lib/context';
import HQNav from '@/components/hq/HQNav';

export const metadata = {
  title: 'Scafold Campaign HQ',
  description: 'Internal campaign management for "What Bugs You?"',
};

export default function HQLayout({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <div className="min-h-screen bg-navy text-white">
        <HQNav />
        <main className="md:ml-16 pb-20 md:pb-0">
          {children}
        </main>
      </div>
    </DataProvider>
  );
}
