import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-deep px-6 pt-16 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center gap-2.5" aria-label="Vision Solutions Limited home">
            <Image
              src="/logos/vslLogo.png"
              alt="Vision Solutions Limited"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-contain"
            />
            <span className="font-heading text-2xl font-bold tracking-[0.12em]">
              VSL<span className="text-accent">.</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-mist">
            Fusing local context and deep technology to build resilient digital systems across the
            Horn of Africa.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Company</p>
          <Link href="/#why" className="text-sm text-mist hover:text-accent">Why VSL</Link>
          <Link href="/#projects" className="text-sm text-mist hover:text-accent">Projects</Link>
          <Link href="/services" className="text-sm text-mist hover:text-accent">Services</Link>
          <Link href="/impact" className="text-sm text-mist hover:text-accent">Impact</Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Contact</p>
          <a href="tel:+252615942403" className="text-sm text-mist hover:text-accent">+252 61 5942403</a>
          <a href="mailto:visolutd@visionsolution.tech" className="text-sm text-mist hover:text-accent">visolutd@visionsolution.tech</a>
          <p className="text-sm text-mist">Via Taleex, KM-4, Mogadishu, SO</p>
        </div>
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            Subscribe to our newsletter
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-between gap-4 border-t border-light/10 pt-6 text-xs text-dim">
        <p>© {new Date().getFullYear()} Vision Solutions Limited. All rights reserved.</p>
        <p>Building a sustainable Somalia — through technology.</p>
      </div>
      <p
        aria-hidden
        className="-mb-10 mt-10 select-none text-center font-heading text-[clamp(100px,22vw,260px)] font-bold leading-[0.8] tracking-[0.04em] text-accent/5"
      >
        VSL
      </p>
    </footer>
  );
}
