import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Impact',
  description:
    'Customer stories: how organizations across Somalia deploy VSL-built platforms and cloud infrastructure.',
};

export default function ImpactPage() {
  return (
    <>
      <Nav />
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-12">
        <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">Customer stories</p>
        <h1 className="max-w-4xl font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.06] tracking-tight">
          Real-world impact, <span className="text-accent">deployed and running.</span>
        </h1>
      </header>

      {/* CASE 1 */}
      <section id="case-field" className="bg-paper px-6 py-24 text-night md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-[0.16em] text-accent-deep">
                Case study — Humanitarian sector
              </p>
              <h2 className="mb-5 font-heading text-[clamp(28px,3vw,40px)] font-semibold leading-tight">
                Digitizing field operations for a national foundation
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-stone">
                Regional teams collected program data on paper — slow to consolidate, error-prone and
                impossible to track in real time.
              </p>
            </div>
            <div className="relative h-[340px] overflow-hidden rounded-[18px]">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Field team collaborating"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ['Challenge', 'Paper registers across three regions, weeks-long reporting cycles and no single view of program delivery.'],
              ['Solution', 'A secure cloud platform with offline-first mobile data collection, role-based access and a live operations dashboard — built, deployed and staff-trained by VSL.'],
              ['Outcome', 'Reporting moved from weeks to hours; three regional teams now feed one real-time dashboard, with VSL providing ongoing 24/7 support.'],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-[#E0E4DD] bg-white p-7">
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-deep">{label}</p>
                <p className="text-sm leading-relaxed text-[#3A423A]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE 2 */}
      <section id="case-cloud" className="bg-ink px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid items-center gap-16 md:grid-cols-2">
            <div className="relative h-[340px] overflow-hidden rounded-[18px] md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Circuit board close-up"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="md:order-2">
              <p className="mb-4 border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                Case study — Logistics sector
              </p>
              <h2 className="mb-5 font-heading text-[clamp(28px,3vw,40px)] font-semibold leading-tight">
                Enterprise cloud infrastructure for a logistics operator
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-mist">
                Aging on-premise servers put shipment tracking and customer systems at constant risk
                of downtime and data loss.
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ['Challenge', 'Unreliable on-premise hardware, no disaster recovery and growing cybersecurity exposure across customer-facing systems.'],
              ['Solution', "Full migration of core systems to hardened cloud infrastructure — automated backups, layered security and VSL's proactive 24/7 monitoring."],
              ['Outcome', 'Tracking and customer services stay online around the clock; recovery is automated, and security patching is continuous.'],
            ].map(([label, text]) => (
              <div key={label} className="rounded-2xl border border-light/10 p-7">
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{label}</p>
                <p className="text-sm leading-relaxed text-mist">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep px-6 pt-20 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 border-b border-light/10 pb-16">
          <h2 className="max-w-xl font-heading text-[clamp(24px,2.8vw,34px)] font-semibold">
            Your story could be next. Let&apos;s talk about your systems.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-deep transition-colors hover:bg-accent-bright"
          >
            Contact us →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
