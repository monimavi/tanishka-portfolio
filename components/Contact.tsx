'use client';

import { FormEvent, useState } from 'react';
import { profile } from '@/data/portfolio';

export default function Contact() {
  const [state,setState]=useState<'idle'|'sending'|'success'|'error'>('idle');
  async function submit(e: FormEvent<HTMLFormElement>){e.preventDefault();setState('sending');const form=new FormData(e.currentTarget);const data=Object.fromEntries(form.entries());try{const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});if(!res.ok)throw new Error();setState('success');e.currentTarget.reset();}catch{setState('error')}}
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="shell contact-panel">
        <div className="contact-copy"><div className="section-kicker light-kicker"><span/> Let’s Work Together</div><h2>Ready to Build Your<br/>Next Digital Project?</h2><p>Have a website, dashboard, CMS, registration system or production issue to solve? Send the details and I’ll get back to you.</p><div className="contact-meta"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={`tel:${profile.phone.replace(/\s/g,'')}`}>{profile.phone}</a></div></div>
        <form className="contact-form" onSubmit={submit}><div className="form-grid"><label>Name<input name="name" required/></label><label>Email<input type="email" name="email" required/></label></div><div className="form-grid"><label>Project Type<select name="projectType" defaultValue="Web Development"><option>Web Development</option><option>Admin Dashboard</option><option>CMS / Publishing</option><option>API Integration</option><option>Registration System</option><option>Maintenance / Bug Fix</option></select></label><label>Budget<input name="budget" placeholder="Optional"/></label></div><label>Message<textarea name="message" rows={5} required/></label><input className="honeypot" name="botcheck" tabIndex={-1} autoComplete="off"/><button className="pill-button mint form-submit" disabled={state==='sending'}>{state==='sending'?'Sending...':'Start a Project ↗'}</button>{state==='success'&&<p className="form-state success">Thanks — your enquiry has been sent.</p>}{state==='error'&&<p className="form-state error">Could not send. Please email me directly.</p>}</form>
      </div>
    </section>
  );
}
