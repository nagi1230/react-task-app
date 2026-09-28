import { Button, Gutter } from './primitives';
import { BRAND_CTA, SERVICES_CTA } from '../data/content';

/**
 * Figma "Container" closing block on the Services and Works pages:
 * lime-tinted, centred, heading 38/600 + body 18/400 + lime button.
 */
export function TintedCta({ onNavigate, heading = SERVICES_CTA.heading, body = SERVICES_CTA.body }) {
  return (
    <section className="da-tint border-y border-da-line px-4 py-[50px] text-center xl:px-[250px] xl:py-[100px] 2xl:px-[350px] 2xl:py-[120px]">
      <h2 className="text-[26px] font-semibold leading-[1.2] text-white md:text-[32px] 2xl:text-[38px] 2xl:leading-[46px]">
        {heading}
      </h2>
      <p className="mx-auto mt-4 max-w-[900px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px] 2xl:mt-[50px]">
        {body}
      </p>
      <Button variant="lime" onClick={() => onNavigate('contact')} className="mt-8 2xl:mt-[50px]">
        {SERVICES_CTA.cta}
      </Button>
    </section>
  );
}

/**
 * Figma "CTA Section" used to close the About, Careers and Contact pages.
 * Desktop: pad 80, gap 50. All copy is #98989a apart from the tagline (#ffffff).
 */
export function BrandCta({ onNavigate }) {
  return (
    <section className="border-t border-da-line">
      <Gutter className="py-10 xl:py-[60px] 2xl:py-20">
        <div className="flex flex-col gap-[30px] 2xl:gap-[50px]">
          <h2 className="text-[24px] font-medium leading-[1.3] text-da-dim 2xl:text-[30px]">
            {BRAND_CTA.heading}
          </h2>
          <p className="max-w-[1100px] text-[16px] leading-[1.5] text-da-dim md:text-[18px] md:leading-[27px]">
            {BRAND_CTA.body}
          </p>
          <div className="text-[18px] leading-[1.5] 2xl:text-[20px]">
            <p className="text-da-dim">{BRAND_CTA.welcome}</p>
            <p className="mt-1 max-w-[1100px] text-white">{BRAND_CTA.tagline}</p>
          </div>
          <Button
            variant="lime"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto sm:self-start sm:min-w-[200px]"
          >
            {BRAND_CTA.cta}
          </Button>
        </div>
      </Gutter>
    </section>
  );
}
