import ContactForm from './ContactForm';
import { Button, Gutter } from './primitives';
import { CONTACT_INTRO } from '../data/content';

/**
 * Figma "Contact Section": a lime-tinted intro block (heading 38/600, body
 * 18/400, lime "Start Project" button) sitting above the form, which is inset
 * by 268px on the desktop frame.
 */
export default function ContactSection({ id }) {
  return (
    <section id={id} className="border-b border-da-line">
      <div className="da-tint border-b border-da-line px-4 py-[50px] text-center xl:px-[250px] xl:py-[100px] 2xl:px-[350px] 2xl:py-[120px]">
        <h2 className="text-[26px] font-semibold leading-[1.2] text-white md:text-[32px] 2xl:text-[38px] 2xl:leading-[46px]">
          {CONTACT_INTRO.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[900px] text-[16px] leading-[1.5] text-da-muted md:text-[18px] md:leading-[27px]">
          {CONTACT_INTRO.body}
        </p>
        <Button
          as="a"
          href="#da-contact-form"
          variant="lime"
          className="mt-8 2xl:mt-[50px]"
        >
          {CONTACT_INTRO.cta}
        </Button>
      </div>

      <Gutter id="da-contact-form" className="py-12 xl:py-16 2xl:py-20">
        <div className="mx-auto w-full max-w-[1060px]">
          <ContactForm />
        </div>
      </Gutter>
    </section>
  );
}
