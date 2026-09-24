import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.botcheck) return NextResponse.json({ ok: true });
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) return NextResponse.json({ error: 'Contact form is not configured yet.' }, { status: 503 });
    const payload = {
      access_key: accessKey,
      subject: `Portfolio enquiry from ${body.name || 'Website visitor'}`,
      from_name: 'Tanishka Portfolio',
      name: body.name,
      email: body.email,
      project_type: body.projectType,
      budget: body.budget || 'Not specified',
      message: body.message,
    };
    const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error('Delivery failed');
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to submit form.' }, { status: 500 });
  }
}
