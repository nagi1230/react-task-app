import { Eyebrow, Gutter, SectionHeader } from '../components/primitives';
import { TintedCta } from '../components/CtaSection';
import { SERVICES_PAGE } from '../data/content';

/**
 * Figma "Services Page - Desktop" (44:365):
 * header block, then one 1632px block per discipline — title 48/600,
 * intro 18/400, an eyebrow line, then three columns each with a 28/500
 * #98989a sub-heading above four bordered list cards (20/500 #e6e6e6).
 */
function ServiceGroup({ group }) {
  return (
    <section className="border-b border-da-line">
      <Gutter className="py-12 xl:py-16 2xl:py-[120px]">
        <div className="flex flex-col gap-6 2xl:gap-[50px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[30px] font-semibold leading-[1.2] text-white md:text-[38px] 2xl:text-[48px] 2xl:leading-[58px]">
              {group.title}
            </h2>
            <p className="max-w-[1100px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
              {group.body}
            </p>
          </div>

          <Eyebrow>{group.listLabel}</Eyebrow>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 2xl:gap-10">
            {group.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-5">
                <h3 className="text-[22px] font-medium leading-[1.25] text-da-dim 2xl:text-[28px] 2xl:leading-[34px]">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-da-line px-5 py-4 text-[16px] font-medium leading-[1.5] text-da-muted transition-colors hover:border-da-lime/40 hover:bg-white/[0.02] md:text-[18px] 2xl:text-[20px] 2xl:leading-[30px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Gutter>
    </section>
  );
}

export default function ServicesPage({ onNavigate }) {
  return (
    <>
      <SectionHeader as="h1" heading={SERVICES_PAGE.heading} body={SERVICES_PAGE.body} />
      {SERVICES_PAGE.groups.map((group) => (
        <ServiceGroup key={group.title} group={group} />
      ))}
      <TintedCta onNavigate={onNavigate} />
    </>
  );
}
