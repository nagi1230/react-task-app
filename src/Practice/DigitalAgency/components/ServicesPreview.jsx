import { Button, Gutter, SectionHeader } from './primitives';
import { SERVICES_INTRO, SERVICE_CARDS } from '../data/content';

/**
 * Figma: header block, then a 577px row of three 532px cards separated by
 * 1px #262626 LINE nodes. Card padding 50, heading 30/600, body 18/400,
 * and a full-width #262626 "Learn More" button pinned to the card foot.
 * The dividers are reproduced with `divide-x` so they collapse cleanly
 * when the grid drops to one column.
 */
export default function ServicesPreview({ onNavigate }) {
  return (
    <section className="border-b border-da-line">
      <SectionHeader heading={SERVICES_INTRO.heading} body={SERVICES_INTRO.body} />

      <Gutter>
        <ul className="grid grid-cols-1 divide-y divide-da-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {SERVICE_CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col justify-between gap-10 py-10 md:px-8 2xl:gap-20 2xl:p-[50px]"
            >
              <div className="flex flex-col gap-6 2xl:gap-10">
                <h3 className="text-[24px] font-semibold leading-[1.3] text-white 2xl:text-[30px] 2xl:leading-[45px]">
                  {card.title}
                </h3>
                <p className="text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[24px]">
                  {card.body}
                </p>
              </div>
              <Button
                variant="surface"
                size="md"
                onClick={() => onNavigate('services')}
                className="w-full"
              >
                Learn More
              </Button>
            </li>
          ))}
        </ul>
      </Gutter>
    </section>
  );
}
