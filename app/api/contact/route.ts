import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { name, org, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? 'VSL Website <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL ?? 'info@vsolcorp.com',
      reply_to: email,
      subject: `Quote request — ${service ?? 'General'}${org ? ` — ${org}` : ''}`,
      text: `Name: ${name}\nOrganization: ${org || '—'}\nEmail: ${email}\nService: ${service || '—'}\n\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
