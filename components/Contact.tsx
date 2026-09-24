'use client';

import { FormEvent, useState } from 'react';
import { siteConfig } from '@/data/portfolio';
import { ArrowUpRight } from './Icons';

export default function Contact() {
  const [status, setStatus] = useState('');

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const projectType = String(form.get('projectType') || '');
    const budget = String(form.get('budget') || '');
    const message = String(form.get('message') || '');

    const subject = encodeURIComponent(`Portfolio enquiry — ${projectType || 'Web project'} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\nBudget: ${budget}\n\nProject details:\n${message}`,
    );

    setStatus('Opening your email app with the project details…');
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B0E13] py-24 text-white sm:py-32">
      <div className="absolute left-1/2 top-0 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-content gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="section-kicker text-aqua">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Have a project in mind? Let&apos;s build it.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            Need a website, admin dashboard, CMS, registration system or production fix? Share the requirement and I&apos;ll get back with a practical technical approach.
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
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <input name="name" required className="field-input" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input name="email" type="email" required className="field-input" placeholder="you@company.com" />
            </label>
            <label className="field-label">
              Project type
              <select name="projectType" required className="field-input">
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
              <select name="budget" className="field-input">
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
            <textarea name="message" required rows={6} className="field-input resize-none" placeholder="Tell me about your project, current setup and what you need help with." />
          </label>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-sm text-xs leading-5 text-slate-500">Submitting opens your email app with the project details pre-filled, so your enquiry goes directly to Tanishka.</p>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
              Send project enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          {status ? <p className="mt-4 text-sm text-aqua">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
