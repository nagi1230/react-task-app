import { useState } from 'react';
import { Gutter, SectionHeader } from './primitives';
import { FAQ } from '../data/content';

/**
 * Figma: two 798px columns of four items, 1px #262626 rules between rows and
 * a vertical rule between columns. Items 01–04 fill the left column and 05–08
 * the right, so the grid flows column-major at xl (`grid-flow-col`).
 * Open state: number #9eff00, heading #c5ff66, answer #e6e6e6 revealed.
 * Closed state: number and heading #ffffff.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-b border-da-line">
      <SectionHeader heading={FAQ.heading} body={FAQ.body} />

      <Gutter className="py-10 2xl:py-20">
        <ul className="grid grid-cols-1 xl:grid-flow-col xl:grid-cols-2 xl:grid-rows-4">
          {FAQ.items.map((item, index) => {
            const open = openIndex === index;
            const number = String(index + 1).padStart(2, '0');
            const panelId = `da-faq-panel-${index}`;
            const buttonId = `da-faq-button-${index}`;

            return (
              <li
                key={item.q}
                className={`border-t border-da-line last:border-b xl:[&:nth-child(4)]:border-b xl:[&:nth-child(8)]:border-b ${
                  index >= 4 ? 'xl:border-l xl:border-l-da-line' : ''
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex w-full items-start gap-5 px-0 py-6 text-left transition-colors hover:bg-white/[0.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-da-lime xl:gap-[30px] xl:px-[50px] xl:py-[30px]"
                  >
                    <span
                      className={`shrink-0 font-da-num text-[22px] font-semibold leading-[1.5] 2xl:text-[28px] 2xl:leading-[42px] ${
                        open ? 'text-da-lime' : 'text-white'
                      }`}
                    >
                      {number}
                    </span>
                    <span
                      className={`flex-1 text-[18px] font-medium leading-[1.4] 2xl:text-[22px] ${
                        open ? 'text-da-lime-mid' : 'text-white'
                      }`}
                    >
                      {item.q}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className={`mt-1 h-5 w-5 shrink-0 transition-transform duration-200 ${
                        open ? 'rotate-180 text-da-lime' : 'text-da-dim'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                  className="pb-8 pl-[42px] pr-0 xl:pb-[34px] xl:pl-[105px] xl:pr-[50px]"
                >
                  <p className="text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
                    {item.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Gutter>
    </section>
  );
}
