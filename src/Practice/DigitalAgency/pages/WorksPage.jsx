import { Eyebrow, Gutter, SectionHeader } from '../components/primitives';
import { TintedCta } from '../components/CtaSection';
import { WORKS_PAGE } from '../data/content';

/**
 * Figma "Works Page - Desktop" (49:6213):
 * header block, then "At SquareUp" intro and ten case studies. Each item has a
 * 26/500 #98989a title, a client name (24/500 #e6e6e6) with its URL
 * (20/400 #98989a), and an 18/400 #98989a description.
 */
export default function WorksPage({ onNavigate }) {
  return (
    <>
      <SectionHeader as="h1" heading={WORKS_PAGE.heading} body={WORKS_PAGE.body} />

      <section className="border-b border-da-line">
        <Gutter className="py-12 xl:py-16 2xl:py-[120px]">
          <div className="flex flex-col gap-6 2xl:gap-[50px]">
            <div className="flex flex-col gap-4">
              <h2 className="text-[30px] font-semibold leading-[1.2] text-white md:text-[38px] 2xl:text-[48px] 2xl:leading-[58px]">
                {WORKS_PAGE.introTitle}
              </h2>
              <p className="max-w-[1100px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
                {WORKS_PAGE.introBody}
              </p>
            </div>

            <Eyebrow>{WORKS_PAGE.listLabel}</Eyebrow>

            <ol className="grid grid-cols-1 gap-px bg-da-line md:grid-cols-2">
              {WORKS_PAGE.items.map((item, index) => (
                <li
                  key={item.client + index}
                  className="flex flex-col gap-4 bg-da-bg p-6 transition-colors hover:bg-white/[0.02] 2xl:p-10"
                >
                  <span
                    aria-hidden="true"
                    className="font-da-num text-[14px] font-medium text-da-lime"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="text-[22px] font-medium leading-[1.3] text-da-dim 2xl:text-[26px]">
                    {item.title}
                  </h3>

                  <div>
                    <p className="text-[20px] font-medium leading-[1.3] text-da-muted 2xl:text-[24px]">
                      {item.client}
                    </p>
                    <p className="mt-1 text-[16px] leading-[1.4] text-da-dim 2xl:text-[20px]">
                      {item.url}
                    </p>
                  </div>

                  <p className="text-[16px] leading-[1.5] text-da-dim md:text-[18px] md:leading-[27px]">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Gutter>
      </section>

      <TintedCta onNavigate={onNavigate} />
    </>
  );
}
