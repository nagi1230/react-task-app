/**
 * Figma: 60x60 lime tile (radius ~9.4) holding a white cub glyph,
 * followed by the "SquareUp" wordmark in white.
 * Both were vectors in the file — redrawn here as inline SVG / text.
 */
export default function Logo({ compact = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`grid shrink-0 place-items-center rounded-[9px] bg-da-lime ${
          compact ? 'h-10 w-10' : 'h-11 w-11 2xl:h-[60px] 2xl:w-[60px]'
        }`}
      >
        <svg
          viewBox="0 0 38 43"
          className={compact ? 'h-6 w-6' : 'h-[26px] w-[26px] 2xl:h-[43px] 2xl:w-[38px]'}
          fill="none"
          aria-hidden="true"
        >
          {/* stylised cub head: two ears + muzzle, cut out of the lime tile */}
          <path
            d="M6 8.5 3 1.5l7.5 3.2A15.6 15.6 0 0 1 19 3.2c3 0 5.9.5 8.5 1.5L35 1.5l-3 7A15.4 15.4 0 0 1 34.6 17c0 5.6-3.1 10.5-7.8 13.2l1.9 10.3-9.7-4.6-9.7 4.6L11.2 30A15.4 15.4 0 0 1 3.4 17c0-3.1.9-6 2.6-8.5Z"
            fill="#1a1a1a"
          />
          <circle cx="13" cy="17" r="2.3" fill="#9eff00" />
          <circle cx="25" cy="17" r="2.3" fill="#9eff00" />
          <path d="M16 23.5h6l-3 3.4-3-3.4Z" fill="#9eff00" />
        </svg>
      </span>
      <span
        className={`font-semibold tracking-tight text-white ${
          compact ? 'text-[19px]' : 'text-[20px] 2xl:text-[24px]'
        }`}
      >
        SquareUp
      </span>
    </span>
  );
}
