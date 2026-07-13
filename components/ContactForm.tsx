'use client';

import { useState } from 'react';

const services = ['Consultation & advisory', 'Software development', 'Support & maintenance'];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', message: '' });
  const [service, setService] = useState(services[0]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: e.target.value });
      setStatus('idle');
    };
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, service }),
      });
      setStatus(res.ok ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const inputCls =
    'rounded-[10px] border border-light/15 bg-light/5 px-4 py-3 text-sm text-light outline-none focus:border-accent';

  return (
    <form onSubmit={submit} className="rounded-[20px] border border-accent/20 bg-panel p-8 md:p-11">
      <h2 className="mb-7 font-heading text-2xl font-semibold">Get a quote</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-mist">Full name</label>
          <input required value={form.name} onChange={update('name')} placeholder="Your name" className={inputCls} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[13px] font-medium text-mist">Organization</label>
          <input value={form.org} onChange={update('org')} placeholder="Company / institution" className={inputCls} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[13px] font-medium text-mist">Email</label>
          <input type="email" required value={form.email} onChange={update('email')} placeholder="you@company.com" className={inputCls} />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[13px] font-medium text-mist">Service needed</label>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setService(s)}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  service === s
                    ? 'border border-accent bg-accent text-deep'
                    : 'border border-light/20 bg-light/5 text-fog hover:border-accent/50'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label className="text-[13px] font-medium text-mist">Project details</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={update('message')}
            placeholder="What are you looking to build or fix?"
            className={`${inputCls} resize-y`}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 w-full rounded-full bg-accent py-3.5 text-[15px] font-semibold text-deep transition-colors hover:bg-accent-bright disabled:opacity-60"
      >
        {status === 'done'
          ? 'Request sent ✓ — we’ll be in touch'
          : status === 'sending'
            ? 'Sending…'
            : status === 'error'
              ? 'Something went wrong — try again'
              : 'Send request →'}
      </button>
      <p className="mt-3.5 text-center text-xs text-dim">
        Your request goes straight to the VSL team at visolutd@visionsolution.tech.
      </p>
    </form>
  );
}
