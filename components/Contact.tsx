'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/data/portfolio';
import { ArrowUpRight } from './Icons';

type Status = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      projectType: String(form.get('projectType') || ''),
      budget: String(form.get('budget') || ''),
      message: String(form.get('message') || ''),
      website: String(form.get('website') || ''),
    };

    setStatus({ type: 'loading', message: 'Sending your enquiry…' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your enquiry.');
      }

      formElement.reset();
      setStatus({ type: 'success', message: result.message });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    }
  }

  const loading = status.type === 'loading';

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B0E13] py-24 text-white sm:py-32">
      <div className="absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-kicker text-aqua">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Have a project in mind? Let&apos;s build it.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            Need a website, admin dashboard, CMS, registration system or production fix? Share the requirement and your enquiry will be delivered directly to my inbox.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-flex items-center gap-2 break-all text-sm font-semibold text-white hover:text-aqua sm:text-base">
                {siteConfig.email} <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Phone / WhatsApp</p>
              <a href={siteConfig.phoneHref} className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-white hover:text-aqua">
                {siteConfig.phone} <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={submitForm} className="rounded-[30px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur sm:p-8">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input name="name" required className="field-input" placeholder="Your name" disabled={loading} />
            </label>
            <label className="field-label">
              Email
              <input name="email" type="email" required className="field-input" placeholder="you@company.com" disabled={loading} />
            </label>
            <label className="field-label">
              Project type
              <select name="projectType" required className="field-input" disabled={loading}>
                <option value="">Select project type</option>
                <option>Full Stack Web Development</option>
                <option>Admin Dashboard</option>
                <option>PHP / MySQL Development</option>
                <option>Next.js / React Development</option>
                <option>CMS / API Integration</option>
                <option>Registration / Payment System</option>
                <option>Maintenance / Bug Fixing</option>
              </select>
            </label>
            <label className="field-label">
              Budget
              <select name="budget" className="field-input" disabled={loading}>
                <option value="">Select budget range</option>
                <option>Under $500</option>
                <option>$500 – $1,500</option>
                <option>$1,500 – $3,000</option>
                <option>$3,000+</option>
                <option>Let&apos;s discuss</option>
              </select>
            </label>
          </div>

          <label className="field-label mt-5 block">
            Message
            <textarea
              name="message"
              required
              rows={6}
              className="field-input resize-none"
              placeholder="Tell me about your project, current setup and what you need help with."
              disabled={loading}
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-sm text-xs leading-5 text-slate-500">
              No email app opens. The enquiry is sent directly from this website to my inbox.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Sending…' : 'Send project enquiry'}
              {!loading ? <ArrowUpRight className="h-4 w-4" /> : null}
            </button>
          </div>

          {status.message ? (
            <div
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm leading-6 ${
                status.type === 'success'
                  ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                  : status.type === 'error'
                    ? 'border-red-400/20 bg-red-400/10 text-red-300'
                    : 'border-white/10 bg-white/[0.035] text-slate-300'
              }`}
              role="status"
            >
              {status.message}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
