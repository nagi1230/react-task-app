import { Gutter, SectionHeader } from './primitives';
import { WHY_CHOOSE } from '../data/content';

/**
 * Figma: header block, then a 2x2 grid of 799x378 cards with 80px padding,
 * split by 1px #262626 rules on both axes. Heading 26/500, body 20/400.
 */
export default function WhyChooseUs() {
  return (
    <section className="border-b border-da-line">
      <SectionHeader heading={WHY_CHOOSE.heading} body={WHY_CHOOSE.body} />

      <Gutter>
        <ul className="grid grid-cols-1 divide-y divide-da-line md:grid-cols-2 md:[&>li:nth-child(-n+2)]:border-b md:[&>li:nth-child(2n)]:border-l md:divide-y-0 md:[&>li]:border-da-line">
          {WHY_CHOOSE.cards.map((card) => (
            <li key={card.title} className="flex flex-col gap-5 py-10 md:p-10 2xl:gap-10 2xl:p-20">
              <h3 className="text-[22px] font-medium leading-[1.3] text-white 2xl:text-[26px] 2xl:leading-[39px]">
                {card.title}
              </h3>
              <p className="text-[16px] leading-[1.5] text-da-muted md:text-[18px] 2xl:text-[20px] 2xl:leading-[30px]">
                {card.body}
              </p>
            </li>
          ))}
        </ul>
      </Gutter>
    </section>
  );
}
