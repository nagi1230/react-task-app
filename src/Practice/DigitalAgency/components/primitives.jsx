/**
 * Shared layout + UI primitives.
 *
 * Horizontal rhythm from Figma:
 *   Desktop 1920 → 162px gutter → 1596px content
 *   Laptop  1440 →  80px gutter → 1280px content
 *   Mobile   390 →  16px gutter →  358px content
 * `Gutter` reproduces exactly that at each breakpoint.
 */

/* ----------------------------------------------------------- Gutter */

export function Gutter({ as = 'div', className = '', children, ...rest }) {
  // Assigned to a capitalised local so JSX treats it as a component, and so
  // the project's `varsIgnorePattern: '^[A-Z_]'` lint rule recognises it.
  const Tag = as;
  return (
    <Tag
      className={`mx-auto w-full max-w-[1920px] px-4 xl:px-20 2xl:px-[162px] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------- Buttons */

const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium ' +
  'transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ' +
  'focus-visible:outline-da-lime';

const BUTTON_VARIANTS = {
  // Figma: fill #9eff00, text #1a1a1a / #262626
  lime: 'bg-da-lime text-da-bg hover:bg-da-lime-mid',
  // Figma: fill #262626, text #ffffff
  surface: 'bg-da-line text-white hover:bg-da-surface-2',
  // Figma: 1px #262626 stroke, transparent fill
  outline: 'border border-da-line text-white hover:border-da-dim hover:bg-white/5',
};

const BUTTON_SIZES = {
  // Figma navbar button: pad 16/24, 18px text
  sm: 'px-6 py-4 text-[16px] leading-[1.2] md:text-[18px]',
  // Figma service card button: pad 18/16, full width, h60
  md: 'px-4 py-[18px] text-[16px] leading-[1.35] md:text-[18px]',
};

export function Button({
  as: Tag = 'button',
  variant = 'lime',
  size = 'sm',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${BUTTON_SIZES[size]} ${className}`}
      {...(Tag === 'button' ? { type: rest.type ?? 'button' } : null)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* --------------------------------------------------------- Hairlines */

/** The 1px #262626 rules Figma uses as LINE nodes between cards. */
export function Rule({ className = '' }) {
  return <div aria-hidden="true" className={`bg-da-line ${className}`} />;
}

/* ----------------------------------------------------- SectionHeader */

/**
 * The lime-tinted, textured header block that opens most sections.
 * Figma padding: desktop 120/300, laptop 100/250, mobile 50/16.
 */
export function SectionHeader({ heading, body, as = 'h2', className = '', children }) {
  const Heading = as;
  return (
    <header
      className={`da-tint border-y border-da-line px-4 py-[50px] text-center xl:px-[250px] xl:py-[100px] 2xl:px-[300px] 2xl:py-[120px] ${className}`}
    >
      <Heading className="text-[30px] font-semibold leading-[1.2] text-white md:text-[38px] 2xl:text-[48px] 2xl:leading-[58px]">
        {heading}
      </Heading>
      {body ? (
        <p className="mx-auto mt-[6px] max-w-[900px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] 2xl:mt-[14px] 2xl:text-[20px]">
          {body}
        </p>
      ) : null}
      {children}
    </header>
  );
}

/* ------------------------------------------------------------ Eyebrow */

/** The "Our design services include:" / "Here are ten examples…" line. */
export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-[18px] leading-[1.3] text-white md:text-[20px] 2xl:text-[22px] ${className}`}>
      {children}
    </p>
  );
}

/* ------------------------------------------------- Big lime numeral */

/** Figma uses a 150px/600 #d8ff99 numeral for Process + Our Story steps. */
export function StepNumeral({ value, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`block font-semibold leading-none text-da-lime-soft text-[64px] md:text-[96px] 2xl:text-[150px] ${className}`}
    >
      {value}
    </span>
  );
}
