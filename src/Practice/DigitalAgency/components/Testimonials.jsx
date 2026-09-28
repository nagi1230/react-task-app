import { Button, Gutter, SectionHeader } from './primitives';
import { TESTIMONIALS } from '../data/content';

/** Figma: 50px avatar circle — the photos were image fills, so initials stand in. */
function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
  return (
    <span
      aria-hidden="true"
      className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border border-da-line bg-da-surface text-[16px] font-medium text-da-lime-soft"
    >
      {initials}
    </span>
  );
}

/**
 * Figma: header block, then six stacked cards (1680px total) each with a
 * 28/500 #d8ff99 pull-quote, an 18/400 body, and a footer pairing the
 * author block with an "Open Website" outline button.
 */
export default function Testimonials() {
  return (
    <section className="border-b border-da-line">
      <SectionHeader heading={TESTIMONIALS.heading} body={TESTIMONIALS.body} />

      <Gutter>
        <ul className="grid grid-cols-1 divide-y divide-da-line xl:grid-cols-2 xl:divide-y-0 xl:[&>li:nth-child(-n+4)]:border-b xl:[&>li:nth-child(2n)]:border-l xl:[&>li]:border-da-line">
          {TESTIMONIALS.items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col justify-between gap-8 py-10 xl:p-10 2xl:gap-10 2xl:p-[50px]"
            >
              <div className="flex flex-col gap-4">
                <blockquote className="text-[22px] font-medium leading-[1.35] text-da-lime-soft 2xl:text-[28px] 2xl:leading-[42px]">
                  {item.quote}
                </blockquote>
                <p className="text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
                  {item.body}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <Avatar name={item.name} />
                  <div>
                    <p className="text-[18px] font-medium leading-[30px] text-white 2xl:text-[20px]">
                      {item.name}
                    </p>
                    <p className="text-[16px] leading-[27px] text-da-muted md:text-[18px]">
                      {item.role}
                    </p>
                  </div>
                </div>
                <Button
                  as="a"
                  href="#"
                  variant="outline"
                  onClick={(e) => e.preventDefault()}
                  className="shrink-0"
                >
                  {TESTIMONIALS.cta}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Gutter>
    </section>
  );
}
