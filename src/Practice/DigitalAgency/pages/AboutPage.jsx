import { Gutter, SectionHeader, StepNumeral } from '../components/primitives';
import { BrandCta } from '../components/CtaSection';
import { ABOUT_PAGE } from '../data/content';

/**
 * Figma "About Page - Desktop" (50:1018):
 * header block, a two-column "About SquareUp" intro (heading 48/600 beside a
 * 20/400 body), then "Our Story" (58/600) as six numbered chapters with
 * 150/600 #d8ff99 numerals and 38/600 #d8ff99 titles.
 */
export default function AboutPage({ onNavigate }) {
  return (
    <>
      <SectionHeader as="h1" heading={ABOUT_PAGE.heading} body={ABOUT_PAGE.body} />

      <section className="border-b border-da-line">
        <Gutter className="py-12 xl:py-20 2xl:py-[100px]">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-[100px] xl:px-[100px]">
            <h2 className="text-[30px] font-semibold leading-[1.2] text-white md:text-[38px] 2xl:text-[48px] 2xl:leading-[58px]">
              {ABOUT_PAGE.introTitle}
            </h2>
            <p className="text-[16px] leading-[1.6] text-da-muted md:text-[18px] 2xl:text-[20px]">
              {ABOUT_PAGE.introBody}
            </p>
          </div>
        </Gutter>
      </section>

      <section className="border-b border-da-line">
        <Gutter className="py-12 xl:py-20 2xl:py-[100px]">
          <h2 className="text-[34px] font-semibold leading-[1.15] text-white md:text-[44px] 2xl:text-[58px]">
            {ABOUT_PAGE.storyTitle}
          </h2>

          <ol className="mt-10 flex flex-col 2xl:mt-[100px]">
            {ABOUT_PAGE.story.map((chapter, index) => (
              <li
                key={chapter.title}
                className="grid grid-cols-1 gap-4 border-t border-da-line py-8 last:border-b xl:grid-cols-[240px_1fr] xl:gap-10 xl:py-12 2xl:grid-cols-[320px_1fr]"
              >
                <div className="flex items-baseline gap-4 xl:flex-col xl:items-start xl:gap-2">
                  <StepNumeral value={String(index + 1).padStart(2, '0')} />
                  <h3 className="text-[24px] font-semibold leading-[1.2] text-da-lime-soft 2xl:text-[38px]">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.5] text-da-dim md:text-[18px] md:leading-[27px]">
                  {chapter.body}
                </p>
              </li>
            ))}
          </ol>
        </Gutter>
      </section>

      <BrandCta onNavigate={onNavigate} />
    </>
  );
}
