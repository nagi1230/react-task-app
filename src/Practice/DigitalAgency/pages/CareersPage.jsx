import { Button, Eyebrow, Gutter, SectionHeader } from '../components/primitives';
import { BrandCta } from '../components/CtaSection';
import { CAREERS_PAGE } from '../data/content';

/**
 * Figma "Careers Page - Desktop" (53:1390):
 * header block, a welcome intro with four perk cards (40/500 #d8ff99 titles),
 * then "Current Openings" grouped by discipline — each role is a card with a
 * 24/500 title, 18/400 body and an outline "Apply Now" button.
 */
export default function CareersPage({ onNavigate }) {
  return (
    <>
      <SectionHeader as="h1" heading={CAREERS_PAGE.heading} body={CAREERS_PAGE.body} />

      <section className="border-b border-da-line">
        <Gutter className="py-12 xl:py-16 2xl:py-[120px]">
          <div className="flex flex-col gap-6 2xl:gap-[50px]">
            <div className="flex flex-col gap-4">
              <h2 className="max-w-[1100px] text-[30px] font-semibold leading-[1.2] text-white md:text-[38px] 2xl:text-[48px] 2xl:leading-[58px]">
                {CAREERS_PAGE.introTitle}
              </h2>
              <p className="max-w-[1100px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
                {CAREERS_PAGE.introBody}
              </p>
            </div>

            <Eyebrow>{CAREERS_PAGE.whyLabel}</Eyebrow>

            <ul className="grid grid-cols-1 gap-px bg-da-line md:grid-cols-2">
              {CAREERS_PAGE.perks.map((perk) => (
                <li key={perk.title} className="flex flex-col gap-4 bg-da-bg p-6 2xl:p-10">
                  <h3 className="text-[24px] font-medium leading-[1.2] text-da-lime-soft 2xl:text-[40px]">
                    {perk.title}
                  </h3>
                  <p className="text-[16px] leading-[1.5] text-da-dim md:text-[18px] md:leading-[27px]">
                    {perk.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Gutter>
      </section>

      <section className="border-b border-da-line">
        <Gutter className="py-12 xl:py-16 2xl:py-[120px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[30px] font-semibold leading-[1.2] text-white md:text-[38px] 2xl:text-[48px] 2xl:leading-[58px]">
              {CAREERS_PAGE.openingsTitle}
            </h2>
            <p className="max-w-[1100px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
              {CAREERS_PAGE.openingsBody}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-12 2xl:gap-[50px]">
            {CAREERS_PAGE.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-[22px] font-medium leading-[1.3] text-da-dim 2xl:text-[28px]">
                  {group.title}
                </h3>
                <ul className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {group.roles.map((role) => (
                    <li
                      key={role.title}
                      className="flex flex-col justify-between gap-6 rounded-lg border border-da-line p-6 transition-colors hover:border-da-lime/40 2xl:p-8"
                    >
                      <div className="flex flex-col gap-3">
                        <h4 className="text-[20px] font-medium leading-[1.3] text-white 2xl:text-[24px]">
                          {role.title}
                        </h4>
                        <p className="text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
                          {role.body}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="md"
                        onClick={() => onNavigate('contact')}
                        className="w-full"
                      >
                        {CAREERS_PAGE.applyCta}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Gutter>
      </section>

      <BrandCta onNavigate={onNavigate} />
    </>
  );
}
