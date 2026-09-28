import { Eyebrow, Gutter, SectionHeader, StepNumeral } from '../components/primitives';
import ContactSection from '../components/ContactSection';
import { PROCESS_PAGE } from '../data/content';

/**
 * Figma "Process Page - Desktop" (50:533):
 * header block, "At SquareUp" intro, then eight steps. Each step pairs a
 * 150/600 #d8ff99 numeral with a 30/500 #98989a title and 18/400 body,
 * and closes with the shared Contact section.
 */
export default function ProcessPage() {
  return (
    <>
      <SectionHeader as="h1" heading={PROCESS_PAGE.heading} body={PROCESS_PAGE.body} />

      <section className="border-b border-da-line">
        <Gutter className="py-12 xl:py-16 2xl:py-[120px]">
          <div className="flex flex-col gap-6 2xl:gap-[50px]">
            <div className="flex flex-col gap-4">
              <h2 className="text-[30px] font-semibold leading-[1.2] text-white md:text-[38px] 2xl:text-[48px] 2xl:leading-[58px]">
                {PROCESS_PAGE.introTitle}
              </h2>
              <p className="max-w-[1100px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
                {PROCESS_PAGE.introBody}
              </p>
            </div>

            <Eyebrow>{PROCESS_PAGE.listLabel}</Eyebrow>

            <ol className="flex flex-col">
              {PROCESS_PAGE.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-1 gap-4 border-t border-da-line py-8 last:border-b xl:grid-cols-[200px_1fr] xl:gap-10 xl:py-12 2xl:grid-cols-[280px_1fr]"
                >
                  <div className="flex items-baseline gap-4 xl:flex-col xl:items-start xl:gap-2">
                    <StepNumeral value={String(index + 1).padStart(2, '0')} />
                    <h3 className="text-[22px] font-medium leading-[1.3] text-da-dim 2xl:text-[30px]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[16px] leading-[1.5] text-da-dim md:text-[18px] md:leading-[27px]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Gutter>
      </section>

      <ContactSection />
    </>
  );
}
