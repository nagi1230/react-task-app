import { useEffect, useState } from 'react';
import Logo from './Logo';
import { Button, Gutter } from './primitives';
import { NAV_LINKS } from '../data/content';

/**
 * Figma navbar:
 *   Desktop 1920 — h100, pad 20/162, logo left · links centre · lime CTA right
 *   Laptop  1440 — h85,  pad 20/80
 *   Mobile   390 — h106, pad 40/16/20/16, logo + hamburger only
 * Active link is 600 weight #ffffff; the rest are 500 #e6e6e6.
 */
export default function Navbar({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  // Close the sheet on Escape, and lock scroll while it is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <div className="sticky top-0 z-50 border-b border-da-line bg-da-bg/95 backdrop-blur-sm">
      <Gutter className="flex h-[70px] items-center justify-between xl:h-[85px] 2xl:h-[100px]">
        <button
          type="button"
          onClick={() => go('home')}
          aria-label="SquareUp — go to home"
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-da-lime"
        >
          <Logo />
        </button>

        {/* Centre links — desktop only */}
        <nav aria-label="Main" className="hidden items-center gap-[30px] xl:flex">
          {NAV_LINKS.map((link) => {
            const active = current === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md text-[18px] leading-[27px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-da-lime ${
                  active
                    ? 'font-semibold text-white'
                    : 'font-medium text-da-muted hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <Button
          variant="lime"
          onClick={() => go('contact')}
          className="hidden xl:inline-flex"
        >
          Contact Us
        </Button>

        {/* Hamburger — below xl */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="da-mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-11 w-11 place-items-center rounded-lg border border-da-line text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-da-lime xl:hidden"
        >
          <span className="relative block h-[14px] w-[22px]">
            <span
              className={`absolute left-0 h-[2px] w-full rounded bg-current transition-transform duration-200 ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-full rounded bg-current transition-transform duration-200 ${
                open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </Gutter>

      {/* Mobile sheet */}
      <div
        id="da-mobile-nav"
        hidden={!open}
        className="border-t border-da-line bg-da-bg xl:hidden"
      >
        <Gutter className="py-6">
          <nav aria-label="Main" className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = current === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => go(link.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`border-b border-da-line py-4 text-left text-[18px] leading-[27px] transition-colors ${
                    active ? 'font-semibold text-da-lime' : 'font-medium text-da-muted'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
          <Button variant="lime" onClick={() => go('contact')} className="mt-6 w-full">
            Contact Us
          </Button>
        </Gutter>
      </div>
    </div>
  );
}
