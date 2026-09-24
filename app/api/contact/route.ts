import { NextResponse } from 'next/server';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: 'Contact form is not configured yet.' },
        { status: 500 },
      );
    }

    const body = await request.json();
    const name = clean(body.name);
    const email = clean(body.email);
    const projectType = clean(body.projectType);
    const budget = clean(body.budget);
    const message = clean(body.message);
    const website = clean(body.website);

    if (website) {
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    }

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields.' },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    const payload = {
      access_key: accessKey,
      subject: `New portfolio enquiry — ${projectType} — ${name}`,
      from_name: 'Tanishka Portfolio',
      name,
      email,
      project_type: projectType,
      budget: budget || 'Not specified',
      message,
    };

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      return NextResponse.json(
        {
          success: false,
          message: result?.message || 'Unable to send your message right now. Please try again.',
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thanks! Your project enquiry has been sent directly to Tanishka.',
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
