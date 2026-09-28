import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';
import { Gutter, SectionHeader } from '../components/primitives';
import { BrandCta } from '../components/CtaSection';
import { CONTACT_DETAILS, CONTACT_PAGE } from '../data/content';

const SOCIALS = ['Twitter', 'LinkedIn', 'Dribbble', 'Instagram'];

function DetailRow({ label, value, href }) {
  const content = href ? (
    <a href={href} className="transition-colors hover:text-da-lime">
      {value}
    </a>
  ) : (
    value
  );
  return (
    <div className="flex flex-col gap-1 border-b border-da-line py-5">
      <span className="text-[14px] uppercase tracking-wider text-da-dim">{label}</span>
      <span className="text-[18px] font-medium leading-[1.4] text-da-muted 2xl:text-[20px]">
        {content}
      </span>
    </div>
  );
}

/**
 * Figma "Contact Page - Desktop" (53:1965):
 * header block, a details column (email / phone / Get Location / Operating
 * Days / Stay Connected) beside the form, then the shared FAQ and brand CTA.
 */
export default function ContactPage({ onNavigate }) {
  return (
    <>
      <SectionHeader as="h1" heading={CONTACT_PAGE.heading} body={CONTACT_PAGE.body} />

      <section className="border-b border-da-line">
        <Gutter className="py-12 xl:py-16 2xl:py-20">
          <div className="grid grid-cols-1 gap-12 xl:grid-cols-[380px_1fr] xl:gap-16 2xl:gap-24">
            <aside className="flex flex-col">
              <DetailRow
                label="Email"
                value={CONTACT_DETAILS.email}
                href={`mailto:${CONTACT_DETAILS.email}`}
              />
              <DetailRow
                label="Phone"
                value={CONTACT_DETAILS.phone}
                href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`}
              />
              <DetailRow label="Address" value={CONTACT_PAGE.locationCta} href="#" />
              <DetailRow
                label={CONTACT_PAGE.operatingLabel}
                value={CONTACT_PAGE.operatingValue}
              />

              <div className="pt-6">
                <p className="text-[18px] font-medium leading-[27px] text-da-muted">
                  {CONTACT_PAGE.stayConnected}
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {SOCIALS.map((name) => (
                    <li key={name}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex rounded-full border border-da-line px-4 py-2 text-[14px] text-da-muted transition-colors hover:border-da-lime hover:text-da-lime"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="min-w-0">
              <ContactForm />
            </div>
          </div>
        </Gutter>
      </section>

      <Faq />
      <BrandCta onNavigate={onNavigate} />
    </>
  );
}
