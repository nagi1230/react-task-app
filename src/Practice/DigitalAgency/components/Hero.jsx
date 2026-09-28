import { Button, Gutter } from './primitives';
import { HERO } from '../data/content';

/**
 * Figma hero:
 *   Heading 68/600 #ffffff, two lines, centred
 *   "For  Startups , Enterprise leaders , Media & Publishers and Social Good"
 *   — connectors #98989a, audiences #ffffff in bordered pills
 *   Buttons: "Our Works" (1px #262626 outline) + "Contact Us" (lime)
 *   Below: a 448px-tall vector burst at 30% opacity (.da-burst in CSS)
 */
export default function Hero({ onNavigate }) {
  return (
    <section className="da-burst border-b border-da-line">
      <Gutter className="relative z-10 pt-[80px] pb-0 2xl:pt-[112px]">
        <h1 className="text-center text-[34px] font-semibold leading-[1.15] text-white sm:text-[44px] xl:text-[56px] 2xl:text-[68px] 2xl:leading-[82px]">
          {HERO.heading[0]}
          <br />
          {HERO.heading[1]}
        </h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-[18px] leading-[26px] 2xl:mt-[50px] 2xl:text-[22px]">
          <span className="text-da-dim">{HERO.forLabel}</span>
          {HERO.audiences.map((item, i) => (
            <span key={item} className="flex items-center gap-x-2">
              <span className="rounded-full border border-da-line bg-da-surface/40 px-4 py-1 text-white">
                {item}
              </span>
              {i < HERO.audiences.length - 2 ? (
                <span className="text-da-dim">,</span>
              ) : i === HERO.audiences.length - 2 ? (
                <span className="text-da-dim">and</span>
              ) : null}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center 2xl:mt-[50px]">
          <Button variant="outline" onClick={() => onNavigate('works')}>
            {HERO.secondaryCta}
          </Button>
          <Button variant="lime" onClick={() => onNavigate('contact')}>
            {HERO.primaryCta}
          </Button>
        </div>

        {/* Spacer standing in for the 448px abstract vector field */}
        <div className="h-[140px] sm:h-[200px] xl:h-[300px] 2xl:h-[380px]" />
      </Gutter>
    </section>
  );
}
