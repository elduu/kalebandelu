import couplePortrait from "@/assets/couple-editorial.jpg";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ABOUT_COUPLE } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

export function AboutCouple() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-18 px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="Get to know us"
        title="About the Couple"
        description="Two different worlds, one beautiful journey together."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-12 md:grid-cols-2">
        {ABOUT_COUPLE.map((person) => (
          <article key={person.name} className="text-center">
            <img
              src={couplePortrait}
              alt={t(person.name)}
              className={`mx-auto aspect-[4/3] w-full object-cover ${person.photoPosition}`}
              loading="lazy"
            />
            <p className="mt-6 text-xs uppercase text-accent">{t(person.role)}</p>
            <h3 className="mt-2 text-4xl text-primary">{t(person.name)}</h3>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              {t(person.text)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
