'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/#why', label: 'Why VSL' },
  { href: '/#projects', label: 'Projects' },
  { href: '/impact', label: 'Impact' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-light/10 bg-ink/85 backdrop-blur-md">
      <div className="flex items-center justify-between gap-6 px-6 py-4 md:px-12">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Vision Solutions Limited home">
          <Image
            src="/logos/vslLogo.png"
            alt="Vision Solutions Limited"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md object-contain"
            priority
          />
          <span className="font-heading text-xl font-bold tracking-[0.12em] text-light">
            VSL<span className="text-accent">.</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                pathname === l.href ? 'text-light' : 'text-mist transition-colors hover:text-light'
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-deep transition-colors hover:bg-accent-bright md:inline-flex"
          >
            Get a quote
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="h-0.5 w-6 bg-light" />
            <span className="h-0.5 w-6 bg-light" />
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-1 border-t border-light/10 px-6 pb-6 pt-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-mist hover:text-light"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-deep"
          >
            Get a quote
          </Link>
        </div>
      )}
    </nav>
  );
}
