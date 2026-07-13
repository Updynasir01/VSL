import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get a quote from Vision Solutions Limited — phone, email or the quote form. We respond within one business day.',
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-16 px-6 py-20 md:grid-cols-[1fr_1.2fr] md:px-12">
        <div>
          <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">Reach out to us</p>
          <h1 className="mb-6 font-heading text-[clamp(34px,4vw,52px)] font-bold leading-[1.08] tracking-tight">
            Let&apos;s build something <span className="text-accent">that lasts.</span>
          </h1>
          <p className="mb-11 max-w-sm text-base leading-relaxed text-mist">
            Tell us about your project and we&apos;ll respond within one business day with next steps
            or a quote.
          </p>
          <div className="flex flex-col gap-5">
            {[
              ['Phone / WhatsApp', <a key="p" href="tel:+252615942403" className="font-heading text-lg font-semibold text-light hover:text-accent">+252 61 5942403</a>],
              ['Email', <a key="e" href="mailto:info@vsolcorp.com" className="font-heading text-lg font-semibold text-light hover:text-accent">info@vsolcorp.com</a>],
              ['Office', <p key="o" className="font-heading text-lg font-semibold">Via Taleex, KM-4, Mogadishu, SO</p>],
            ].map(([label, node]) => (
              <div key={label as string} className="rounded-2xl border border-light/10 px-6 py-5">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">{label}</p>
                {node}
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </main>
      <footer className="flex flex-wrap justify-between gap-4 border-t border-light/10 px-6 py-6 text-xs text-dim md:px-12">
        <p>© {new Date().getFullYear()} Vision Solutions Limited. All rights reserved.</p>
        <p>Via Taleex, KM-4, Mogadishu, SO</p>
      </footer>
    </div>
  );
}
