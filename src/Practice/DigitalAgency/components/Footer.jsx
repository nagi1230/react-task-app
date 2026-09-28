import Logo from './Logo';
import { Gutter, Rule } from './primitives';
import { CONTACT_DETAILS, FOOTER_LINKS } from '../data/content';

const SOCIALS = ['Twitter', 'LinkedIn', 'Dribbble', 'Instagram'];

function SocialIcon({ name }) {
  const paths = {
    Twitter: 'M18.9 3H21l-6.6 7.6L22 21h-6.2l-4.3-5.6L6.3 21H4l7-7.9L3.5 3h6.3l4 5.3L18.9 3Z',
    LinkedIn:
      'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05A4.2 4.2 0 0 1 17.5 8.7c3 0 3.5 1.9 3.5 4.5V21h-4v-6.3c0-1.5-.3-2.6-1.7-2.6s-2 1-2 2.5V21h-4V9Z',
    Dribbble:
      'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.7a8 8 0 0 1 1.8 4.8c-.7-.2-3-.6-5.4-.3a30 30 0 0 0-1.6-3.3 9.7 9.7 0 0 0 5.2-1.2ZM12 4a8 8 0 0 1 5.3 2 8 8 0 0 1-4.6 1.1A38 38 0 0 0 9.9 4.3c.7-.2 1.4-.3 2.1-.3ZM7.8 5.1c1 1.2 1.9 2.5 2.7 3.8-2.9.8-5.3.8-6.1.7a8 8 0 0 1 3.4-4.5ZM4 12v-.3c.8 0 3.9.1 7.3-1 .2.4.4.8.5 1.2-3.2 1-5 3.8-5.4 4.5A8 8 0 0 1 4 12Zm8 8a8 8 0 0 1-5-1.7c.3-.6 1.7-3.1 5.2-4.3a22 22 0 0 1 1.2 6 8 8 0 0 1-1.4.1Zm3.2-.8a24 24 0 0 0-1.1-5.7c2.2-.3 4.2.2 4.5.3a8 8 0 0 1-3.4 5.4Z',
    Instagram:
      'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.4.45.6.23 1 .5 1.5 1 .5.5.77.9 1 1.5.2.5.4 1.2.45 2.4.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.45 2.4-.23.6-.5 1-1 1.5-.5.5-.9.77-1.5 1-.5.2-1.2.4-2.4.45-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.4-.45-.6-.23-1-.5-1.5-1-.5-.5-.77-.9-1-1.5-.2-.5-.4-1.2-.45-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.45-2.4.23-.6.5-1 1-1.5.5-.5.9-.77 1.5-1 .5-.2 1.2-.4 2.4-.45C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.4.17-.7.37-1 .67-.3.3-.5.6-.67 1-.13.34-.28.83-.32 1.74C3.54 8.5 3.53 8.9 3.53 12s0 3.5.08 4.7c.04.9.19 1.4.32 1.74.17.4.37.7.67 1 .3.3.6.5 1 .67.34.13.83.28 1.74.32 1.2.07 1.6.08 4.7.08s3.5 0 4.7-.08c.9-.04 1.4-.19 1.74-.32.4-.17.7-.37 1-.67.3-.3.5-.6.67-1 .13-.34.28-.83.32-1.74.07-1.2.08-1.6.08-4.7s0-3.5-.08-4.7c-.04-.9-.19-1.4-.32-1.74a2.7 2.7 0 0 0-.67-1 2.7 2.7 0 0 0-1-.67c-.34-.13-.83-.28-1.74-.32C15.5 4 15.1 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Zm6.3-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z',
  };
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

/**
 * Figma footer:
 *   Desktop — pad 50/162, gap 50: [logo · links · contact] / rule / [social · copyright]
 *   Mobile  — pad 30/16, gap 30, stacked
 */
export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-da-line">
      <Gutter className="py-[30px] xl:py-10 2xl:py-[50px]">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between">
          <div className="shrink-0">
            <Logo />
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4 xl:flex xl:flex-wrap xl:gap-x-[30px]"
          >
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className="text-left text-[16px] font-medium leading-[27px] text-da-muted transition-colors hover:text-da-lime md:text-[18px]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <ul className="flex flex-col gap-2 text-[16px] leading-[27px] text-da-muted md:text-[18px]">
            <li>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="transition-colors hover:text-da-lime"
              >
                {CONTACT_DETAILS.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`}
                className="transition-colors hover:text-da-lime"
              >
                {CONTACT_DETAILS.phone}
              </a>
            </li>
            <li>{CONTACT_DETAILS.location}</li>
          </ul>
        </div>

        <Rule className="my-[30px] h-px w-full xl:my-10 2xl:my-[50px]" />

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[16px] font-medium leading-[27px] text-da-muted md:text-[18px]">
              Stay Connected
            </span>
            <ul className="flex items-center gap-3">
              {SOCIALS.map((name) => (
                <li key={name}>
                  <a
                    href="#"
                    aria-label={name}
                    onClick={(e) => e.preventDefault()}
                    className="grid h-9 w-9 place-items-center rounded-full border border-da-line text-da-muted transition-colors hover:border-da-lime hover:text-da-lime"
                  >
                    <SocialIcon name={name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[16px] leading-[27px] text-da-dim md:text-[18px]">
            {CONTACT_DETAILS.copyright}
          </p>
        </div>
      </Gutter>
    </footer>
  );
}
