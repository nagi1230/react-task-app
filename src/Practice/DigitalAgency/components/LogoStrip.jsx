import { Gutter } from './primitives';
import { TRUST_STRIP } from '../data/content';

/**
 * Figma: a 170px band (fill rgba(36,36,36,0.2), 1px #262626) holding six
 * 249x90 logo cards, with a pill badge "Trusted By 250+ Companies" straddling
 * the top border. Logos were vectors — wordmarks stand in for them here.
 * Below xl the six cards scroll as a marquee instead of overflowing.
 */
export default function LogoStrip() {
  const items = TRUST_STRIP.logos;

  return (
    <section className="relative border-b border-da-line bg-da-surface/20">
      {/* Badge sits on the top edge, as in Figma */}
      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
        <span className="whitespace-nowrap rounded-full border border-da-line bg-da-bg px-6 py-3 text-[14px] font-medium leading-[22px] text-da-offwhite md:px-[34px] md:py-5 md:text-[18px]">
          {TRUST_STRIP.badge}
        </span>
      </div>

      {/* xl and up: the exact six-across row from the desktop frame */}
      <Gutter className="hidden py-10 xl:block">
        <ul className="grid grid-cols-6">
          {items.map((name) => (
            <li
              key={name}
              className="flex h-[90px] items-center justify-center px-6 text-center text-[18px] font-medium tracking-wide text-da-muted"
            >
              {name}
            </li>
          ))}
        </ul>
      </Gutter>

      {/* Below xl: marquee, mirroring the mobile frame's stacked/scrolling strip */}
      <div className="overflow-hidden py-10 xl:hidden">
        <div className="da-marquee-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {items.map((name) => (
                <li
                  key={name}
                  className="flex h-[70px] w-[180px] items-center justify-center text-center text-[16px] font-medium tracking-wide text-da-muted"
                >
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
