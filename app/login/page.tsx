'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/dashboard');
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 bg-vermillion rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
          </div>

          <h1 className="text-white text-xl font-semibold text-center mb-1">
            Campaign HQ
          </h1>
          <p className="text-gray-400 text-sm text-center mb-8">
            Enter password to continue
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-vermillion/50 transition-colors"
              autoFocus
            />
            {error && (
              <p className="text-vermillion text-xs mt-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full mt-4 bg-vermillion hover:bg-vermillion/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg px-4 py-3 text-sm transition-colors"
            >
              {loading ? 'Entering...' : 'Enter Campaign HQ'}
            </button>
          </form>
        </div>

        <p className="text-gray-600 text-xs text-center mt-6">
          Scafold &ldquo;What Bugs You?&rdquo; Campaign
        </p>
      </div>
    </div>
  );
}
