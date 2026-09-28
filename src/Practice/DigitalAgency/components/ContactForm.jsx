import { useId, useState } from 'react';
import { Button } from './primitives';
import { FORM } from '../data/content';

const LABEL = 'block text-[18px] font-medium leading-[1.4] text-white 2xl:text-[22px] 2xl:leading-[33px]';
const FIELD =
  'mt-3 w-full rounded-lg border border-da-line bg-transparent px-5 py-4 text-[16px] leading-[27px] ' +
  'text-white placeholder:text-da-placeholder transition-colors focus:border-da-lime focus:outline-none md:text-[18px]';

/**
 * Figma "Form": Full Name + Email side by side, a checkbox group, a budget
 * range slider ($1000–$5000, labels in Inter 16/500), a message textarea and
 * a lime Submit button.
 */
export default function ContactForm() {
  const uid = useId();
  const [budget, setBudget] = useState(FORM.budgetMin);
  const [reasons, setReasons] = useState([]);
  const [sent, setSent] = useState(false);

  const toggleReason = (reason) =>
    setReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );

  const handleSubmit = (event) => {
    // No backend in the design — acknowledge locally so the form is usable.
    event.preventDefault();
    setSent(true);
  };

  const pct = ((budget - FORM.budgetMin) / (FORM.budgetMax - FORM.budgetMin)) * 100;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 2xl:gap-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <label className={LABEL} htmlFor={`${uid}-name`}>
            {FORM.fullName}
          </label>
          <input
            id={`${uid}-name`}
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder={FORM.placeholder}
            className={FIELD}
          />
        </div>
        <div>
          <label className={LABEL} htmlFor={`${uid}-email`}>
            {FORM.email}
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={FORM.placeholder}
            className={FIELD}
          />
        </div>
      </div>

      <fieldset>
        <legend className={LABEL}>{FORM.reasonHeading}</legend>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
          {FORM.reasons.map((reason) => {
            const id = `${uid}-reason-${reason}`;
            const checked = reasons.includes(reason);
            return (
              <label
                key={reason}
                htmlFor={id}
                className="flex cursor-pointer items-center gap-3 text-[16px] leading-[27px] text-da-offwhite md:text-[18px]"
              >
                <input
                  id={id}
                  name="reasons"
                  value={reason}
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleReason(reason)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded border transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-da-lime ${
                    checked ? 'border-da-lime bg-da-lime' : 'border-da-line'
                  }`}
                >
                  {checked ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 text-da-bg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  ) : null}
                </span>
                {reason}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label className={LABEL} htmlFor={`${uid}-budget`}>
          {FORM.budgetHeading}
        </label>
        <p className="mt-1 text-[16px] leading-[27px] text-da-muted md:text-[18px]">
          {FORM.budgetHint}
        </p>
        <input
          id={`${uid}-budget`}
          name="budget"
          type="range"
          min={FORM.budgetMin}
          max={FORM.budgetMax}
          step={100}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="da-range mt-6"
          style={{
            background: `linear-gradient(90deg, var(--color-da-lime) ${pct}%, var(--color-da-line) ${pct}%)`,
          }}
        />
        <div className="mt-3 flex items-center justify-between font-da-num text-[16px] font-medium leading-[19px] text-white">
          <span>${FORM.budgetMin}</span>
          <span className="text-da-lime">${budget}</span>
          <span>${FORM.budgetMax}</span>
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor={`${uid}-message`}>
          {FORM.message}
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={5}
          placeholder={FORM.placeholder}
          className={`${FIELD} resize-y`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="lime" className="w-full sm:w-auto sm:min-w-[200px]">
          {FORM.submit}
        </Button>
        <p role="status" aria-live="polite" className="text-[16px] text-da-lime">
          {sent ? 'Thanks — we’ll be in touch shortly.' : ''}
        </p>
      </div>
    </form>
  );
}
