import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const partners = [
  { src: '/logos/logo-hsf.png', alt: 'Hormuud Salaam Foundation' },
  { src: '/logos/logo-bluexpress.png', alt: 'BlueXpress Technologies' },
  { src: '/logos/logo-titanium.png', alt: 'Titanium Construction & Real Estate' },
  { src: '/logos/logo-mpa.png', alt: 'MPA Dekedda Muqdisho' },
  { src: '/logos/logo-ecozen.png', alt: 'Ecozen' },
  { src: '/logos/logo-aia.png', alt: 'Asal Institute of Agriculture' },
  { src: '/logos/logo-savethechildren.png', alt: 'Save the Children' },
  { src: '/logos/logo-tropikal.png', alt: 'Tropikal' },
];

const trustedBy = [
  'Hormuud Salaam Foundation',
  'BLUEXPRESS',
  'Save the Children',
  'TROPIKAL',
  'ecozen',
  'MPA Dekedda Muqdisho',
];

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:px-12 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-44 right-[-120px] h-[640px] w-[640px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(52,199,111,.14) 0%, rgba(52,199,111,0) 65%)' }}
        />
        <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
          Vision Solutions Limited — Mogadishu
        </p>
        <h1 className="max-w-4xl font-heading text-[clamp(44px,6vw,76px)] font-bold leading-[1.04] tracking-tight">
          Enterprise technology for the Horn of Africa.
          <br />
          <span className="text-accent">Built to last.</span>
        </h1>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-md text-lg leading-relaxed text-mist">
            VSL designs, builds and runs the digital systems that let enterprises, institutions and
            governments in Somalia modernize with confidence.
          </p>
          <div className="flex gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-deep transition-colors hover:bg-accent-bright"
            >
              Contact us <span className="font-heading">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-light/25 px-6 py-3.5 text-[15px] font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Our services
            </Link>
          </div>
        </div>
        <div className="mt-20 border-t border-light/10 pt-7">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.16em] text-dim">Trusted by</p>
          <div className="flex flex-wrap items-center gap-x-11 gap-y-4 opacity-75">
            {trustedBy.map((name) => (
              <span key={name} className="font-heading text-[15px] font-semibold text-fog">
                {name}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="bg-paper px-6 py-24 text-night md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent-deep">
            Powering digital transformation
          </p>
          <h2 className="max-w-3xl font-heading text-[clamp(28px,3.4vw,44px)] font-semibold leading-tight tracking-tight [text-wrap:pretty]">
            VSL builds the technology that enables organizations across the Horn of Africa to{' '}
            <span className="text-accent-deep">own, secure and scale</span> their digital operations.
          </h2>

          <div className="mt-16 grid overflow-hidden rounded-[20px] bg-ink text-light md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 p-10 md:p-12">
              <p className="border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
                End-to-end technology infrastructure
              </p>
              <h3 className="font-heading text-3xl font-semibold leading-tight">
                Strategy. Software.
                <br />
                Support.
              </h3>
              <p className="max-w-sm text-[15px] leading-relaxed text-mist">
                One partner across the full technology lifecycle — from ICT strategy and cloud
                adoption to custom platforms and 24/7 operations.
              </p>
              <div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-accent-bright"
                >
                  Start building →
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
                alt="Server infrastructure"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="grid border-t border-light/10 md:col-span-2 md:grid-cols-3">
              {[
                ['VSL ADVISE', 'ICT strategy, cloud & cybersecurity consulting'],
                ['VSL BUILD', 'SaaS, web, mobile & AI-powered systems'],
                ['VSL RUN', '24/7 help-desk, monitoring & maintenance'],
              ].map(([label, desc], i) => (
                <div
                  key={label}
                  className={`px-10 py-5 md:px-12 ${i < 2 ? 'border-b border-light/10 md:border-b-0 md:border-r' : ''}`}
                >
                  <p className="mb-1.5 font-mono text-[11px] tracking-[0.14em] text-accent">{label}</p>
                  <p className="text-[13px] text-mist">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-paper px-6 pb-24 pt-6 text-night md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[200px_1fr]">
          <p className="mt-1.5 font-mono text-[13px] uppercase tracking-[0.18em] text-accent-deep">
            Our partners
          </p>
          <div>
            <h2 className="mb-10 max-w-2xl font-heading text-[clamp(26px,3vw,38px)] font-semibold leading-tight [text-wrap:pretty]">
              Institutions and enterprises rely on VSL to deliver mission-critical technology.
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {partners.map((p) => (
                <div
                  key={p.alt}
                  className="flex min-h-[110px] items-center justify-center rounded-[14px] border border-[#E0E4DD] bg-white p-4"
                >
                  <Image src={p.src} alt={p.alt} width={160} height={72} className="max-h-[72px] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY VSL */}
      <section id="why" className="bg-ink px-6 py-28 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">Why VSL?</p>
            <h2 className="mb-11 font-heading text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-tight">
              Your technology partner, from strategy to support
            </h2>
            <div className="flex flex-col gap-6">
              {[
                ['Advise with clarity', 'Turnkey ICT consultation — infrastructure audits, cloud adoption and migration, cybersecurity and data governance aligned to your growth objectives.'],
                ['Build without compromise', 'Full-stack development of enterprise systems — cloud SaaS, web and mobile applications, PWAs and AI-powered platforms, delivered end to end.'],
                ['Run with confidence', 'Proactive monitoring, rapid troubleshooting and 24/7 support keep your critical systems secure, compliant and always on.'],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4">
                  <span className="font-heading font-bold text-accent">✦</span>
                  <div>
                    <p className="mb-1 text-[17px] font-semibold">{title}</p>
                    <p className="max-w-md text-[15px] leading-relaxed text-mist">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-11">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-deep transition-colors hover:bg-accent-bright"
              >
                Build with us →
              </Link>
            </div>
          </div>
          <div className="grid content-start gap-3">
            {[
              ['4+', 'Years of operational excellence across the Horn of Africa'],
              ['24/7', 'Support and monitoring for mission-critical systems'],
              ['E2E', 'One accountable partner from first assessment to final deployment'],
            ].map(([stat, desc]) => (
              <div key={stat} className="rounded-2xl border border-light/10 p-7">
                <p className="font-heading text-[44px] font-bold text-accent">{stat}</p>
                <p className="mt-1.5 text-sm text-mist">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services banner */}
        <div className="mx-auto mt-24 grid max-w-6xl gap-12 rounded-[20px] border border-accent/25 bg-panel p-10 md:grid-cols-[1.2fr_1fr] md:p-14">
          <div>
            <p className="mb-5 border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              What we do
            </p>
            <h3 className="font-heading text-[clamp(26px,3vw,36px)] font-semibold leading-tight [text-wrap:pretty]">
              Turnkey IT solutions that keep you competitive and accelerate business growth.
            </h3>
          </div>
          <div className="flex flex-col justify-center gap-4">
            {[
              ['Consultation & advisory', 'future-proof IT strategy, assessments, cloud & security roadmaps'],
              ['Software development', 'SaaS, web & mobile apps, AI systems, full deployment lifecycle'],
              ['Help-desk & maintenance', '24/7 support, patching, cybersecurity enhancements'],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-baseline gap-3">
                <span className="text-accent">✦</span>
                <p className="text-[15px] text-fog">
                  <strong className="text-light">{title}</strong> — {desc}
                </p>
              </div>
            ))}
            <div>
              <Link
                href="/services"
                className="mt-2 inline-flex items-center gap-2 rounded-full border border-light/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                Explore services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-paper px-6 py-24 text-night md:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.18em] text-accent-deep">Testimonials</p>
          <h2 className="mb-3 font-heading text-[clamp(26px,3vw,38px)] font-semibold">
            What partners say about working with VSL
          </h2>
          <p className="mb-12 text-[15px] text-stone">
            From institutions modernizing operations to enterprises securing their systems.
          </p>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[20px] bg-ink p-10 text-light md:p-16">
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-accent/40 bg-accent/15 font-heading text-2xl font-bold text-accent">
              AM
            </div>
            <p className="max-w-2xl font-heading text-[21px] italic leading-relaxed [text-wrap:pretty]">
              “VSL took us from paper registers to a live digital platform in under six months. Their
              team understood our context, trained our staff on the ground, and stayed with us long
              after launch. Reporting that used to take weeks now takes hours.”
            </p>
            <div>
              <p className="font-semibold text-accent">Abdirahman Mohamed</p>
              <p className="mt-1 text-[13px] text-mist">Operations Director, Partner Organization — Mogadishu</p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER STORIES */}
      <section id="stories" className="bg-paper px-6 pb-28 pt-6 text-night md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.18em] text-accent-deep">
            Customer stories
          </p>
          <h2 className="mb-14 max-w-2xl font-heading text-[clamp(28px,3.4vw,42px)] font-semibold leading-tight [text-wrap:pretty]">
            Real-world impact: how organizations deploy VSL&apos;s technology.
          </h2>
          <div className="grid items-center gap-x-12 gap-y-14 md:grid-cols-2">
            <div className="relative h-[340px] overflow-hidden rounded-[18px]">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Field team collaborating"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div>
              <h3 className="mb-3.5 font-heading text-2xl font-semibold leading-snug">
                How a national foundation <span className="text-accent-deep">digitized field operations</span>{' '}
                with a custom platform
              </h3>
              <p className="mb-5 max-w-md text-[15px] leading-relaxed text-stone">
                Field teams across three regions moved from paper registers to a secure cloud platform
                built by VSL — data collection, beneficiary tracking and reporting now flow in real
                time to one dashboard.
              </p>
              <Link
                href="/impact#case-field"
                className="border-b-2 border-accent pb-0.5 text-sm font-semibold text-night hover:text-accent-deep"
              >
                Read case →
              </Link>
            </div>
            <div className="md:order-3">
              <h3 className="mb-3.5 font-heading text-2xl font-semibold leading-snug">
                Deploying <span className="text-accent-deep">enterprise cloud infrastructure</span> for a
                logistics operator
              </h3>
              <p className="mb-5 max-w-md text-[15px] leading-relaxed text-stone">
                A Mogadishu logistics operator migrated its core systems to the cloud with VSL —
                hardened security, automated backups and 24/7 monitoring keep tracking and customer
                services online around the clock.
              </p>
              <Link
                href="/impact#case-cloud"
                className="border-b-2 border-accent pb-0.5 text-sm font-semibold text-night hover:text-accent-deep"
              >
                Read case →
              </Link>
            </div>
            <div className="relative h-[340px] overflow-hidden rounded-[18px] md:order-4">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Circuit board close-up"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ONGOING PROJECTS */}
      <section id="projects" className="bg-ink px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-[13px] uppercase tracking-[0.18em] text-accent">
            Ongoing projects
          </p>
          <h2 className="mb-4 max-w-2xl font-heading text-[clamp(28px,3.4vw,42px)] font-semibold leading-tight [text-wrap:pretty]">
            What we&apos;re building across Somalia right now.
          </h2>
          <p className="mb-16 max-w-xl text-[15px] leading-relaxed text-mist">
            Live engagements spanning ports, agriculture and enterprise operations — from design
            through deployment and support.
          </p>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                status: 'In progress',
                sector: 'Maritime & logistics',
                title: 'Port operations digital platform',
                desc: 'A unified operations dashboard for berth scheduling, cargo visibility and stakeholder reporting at Mogadishu Port — replacing fragmented spreadsheets with live data.',
                scope: 'Build · Advise',
                image:
                  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80',
                alt: 'Cargo containers at a port',
              },
              {
                status: 'In progress',
                sector: 'Agriculture',
                title: 'Institute learning & field data system',
                desc: 'Custom platform for an agricultural institute — student records, field research capture and programme reporting in one secure cloud environment.',
                scope: 'Build · Run',
                image:
                  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',
                alt: 'Agricultural fields under open sky',
              },
              {
                status: 'In progress',
                sector: 'Enterprise IT',
                title: '24/7 monitoring & help-desk rollout',
                desc: 'Proactive infrastructure monitoring, patching and a bilingual help-desk for a multi-site enterprise — keeping critical systems online around the clock.',
                scope: 'Run · Advise',
                image:
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
                alt: 'Operations monitoring screens',
              },
            ].map((project) => (
              <article key={project.title} className="flex flex-col">
                <div className="relative mb-6 h-[200px] overflow-hidden rounded-[18px]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    {project.status}
                  </span>
                  <span className="text-dim" aria-hidden>
                    ·
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                    {project.sector}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="mb-5 flex-1 text-[15px] leading-relaxed text-mist">{project.desc}</p>
                <p className="border-t border-light/10 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-fog">
                  {project.scope}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-light/10 pt-10">
            <p className="max-w-md text-[15px] text-mist">
              Have a programme in motion? We can step in at strategy, build or run.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-light/25 px-6 py-3 text-[15px] font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Discuss your project →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep px-6 pt-28 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-10 border-b border-light/10 pb-24">
          <h2 className="max-w-2xl font-heading text-[clamp(30px,3.8vw,48px)] font-bold leading-tight [text-wrap:pretty]">
            Discover how VSL can help you{' '}
            <span className="text-accent">unleash the potential of technology</span> to transform your
            organization.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-4 text-base font-semibold text-deep transition-colors hover:bg-accent-bright"
          >
            Contact us →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
