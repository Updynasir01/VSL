'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={subscribe} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-light/15 bg-light/5 px-4 py-2.5 text-sm text-light outline-none focus:border-accent"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-accent-bright disabled:opacity-60"
      >
        {status === 'done' ? 'Subscribed ✓' : status === 'sending' ? 'Sending…' : status === 'error' ? 'Retry' : 'Subscribe'}
      </button>
    </form>
  );
}
