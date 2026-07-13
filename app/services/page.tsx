import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'ICT consultation & advisory, full-stack software development, and 24/7 help-desk support & maintenance — turnkey IT solutions from VSL.',
};

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  items: string[];
  img: { src: string; alt: string };
  dark: boolean;
  imageFirst?: boolean;
};

const services: Service[] = [
  {
    id: 'advise',
    eyebrow: '01 — VSL Advise',
    title: 'Consultation & advisory',
    desc: 'We start with a thorough assessment of your infrastructure and business goals, then plan a future-proof IT strategy aligned with your growth objectives.',
    items: ['Infrastructure assessments', 'Cloud adoption & migration', 'Network enhancement', 'Cybersecurity improvement', 'Data quality & governance', 'IT strategy roadmaps'],
    img: { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80', alt: 'Advisory session' },
    dark: false,
  },
  {
    id: 'build',
    eyebrow: '02 — VSL Build',
    title: 'Software development',
    desc: 'Full-stack development of enterprise systems, handled across the entire lifecycle — from initial design and testing to seamless integration into your workflows.',
    items: ['Cloud SaaS platforms', 'Web & mobile applications', 'Progressive web apps', 'AI-powered systems', 'Custom software', 'System integration'],
    img: { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80', alt: 'Code on screen' },
    dark: true,
    imageFirst: true,
  },
  {
    id: 'run',
    eyebrow: '03 — VSL Run',
    title: 'Help-desk support & maintenance',
    desc: 'Peace of mind through proactive monitoring, rapid troubleshooting and regular maintenance — your infrastructure stays secure, scalable and compliant.',
    items: ['24/7 critical-system support', 'Proactive monitoring', 'Updates & patching', 'Cybersecurity enhancements', 'Cloud hosting & backup', 'Network security'],
    img: { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80', alt: 'Support engineer at work' },
    dark: false,
  },
];

const steps = [
  ['01', 'Assess', 'Audit of your infrastructure, goals and constraints.'],
  ['02', 'Design', 'A tailored roadmap, architecture and delivery plan.'],
  ['03', 'Build', 'Development, testing and integration — on time, on budget.'],
  ['04', 'Run', 'Training, documentation and 24/7 support post-launch.'],
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <header className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-12">
        <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">Our services</p>
        <h1 className="max-w-3xl font-heading text-[clamp(38px,5vw,64px)] font-bold leading-[1.06] tracking-tight">
          Turnkey IT solutions, <span className="text-accent">end to end.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist [text-wrap:pretty]">
          Three practices, one accountable partner: we advise on your technology strategy, build the
          systems, and run them 24/7.
        </p>
      </header>

      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={`px-6 py-24 md:px-12 ${s.dark ? 'bg-ink text-light' : 'bg-paper text-night'}`}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
            <div className={s.imageFirst ? 'md:order-2' : ''}>
              <p
                className={`mb-4 border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-[0.16em] ${s.dark ? 'text-accent' : 'text-accent-deep'}`}
              >
                {s.eyebrow}
              </p>
              <h2 className="mb-5 font-heading text-[clamp(28px,3vw,40px)] font-semibold leading-tight">
                {s.title}
              </h2>
              <p className={`mb-7 max-w-lg text-base leading-relaxed ${s.dark ? 'text-mist' : 'text-stone'}`}>
                {s.desc}
              </p>
              <div className={`grid grid-cols-1 gap-x-6 gap-y-3 text-sm font-medium sm:grid-cols-2 ${s.dark ? 'text-fog' : 'text-[#3A423A]'}`}>
                {s.items.map((item) => (
                  <div key={item} className="flex gap-2.5">
                    <span className={s.dark ? 'text-accent' : 'text-accent-deep'}>✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={`relative h-[360px] overflow-hidden rounded-[18px] ${s.imageFirst ? 'md:order-1' : ''}`}>
              <Image src={s.img.src} alt={s.img.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </div>
        </section>
      ))}

      <section className="bg-deep px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">How we work</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {steps.map(([num, title, desc]) => (
              <div key={num} className="rounded-2xl border border-light/10 p-6">
                <p className="mb-2.5 font-mono text-xs text-accent">{num}</p>
                <p className="mb-2 font-heading text-lg font-semibold">{title}</p>
                <p className="text-[13px] leading-relaxed text-mist">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-light/10 pt-12">
            <h2 className="max-w-xl font-heading text-[clamp(24px,2.8vw,34px)] font-semibold">
              Ready to modernize? Tell us what you&apos;re building.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-deep transition-colors hover:bg-accent-bright"
            >
              Get a quote →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
