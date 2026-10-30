import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

import storyDetail from "@/assets/story-detail.jpg";
import { SectionLabel } from "@/components/common/SectionLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { MEAL_OPTIONS } from "@/data/content";
import { useLanguage } from "@/i18n/useLanguage";

type Attendance = "accept" | "decline";

const fieldClass = "h-12 rounded-none text-base sm:text-sm";
const choiceClass =
  "flex min-h-15 cursor-pointer items-center gap-3 border border-border px-4 transition has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-secondary";

export function Rsvp() {
  const { t } = useLanguage();
  const [attendance, setAttendance] = useState<Attendance>("accept");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send `new FormData(event.currentTarget)` to your backend / form service.
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="scroll-mt-18 bg-secondary px-5 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid overflow-hidden border border-border bg-card shadow-xl md:grid-cols-[0.8fr_1.2fr]">
          <RsvpIntro />

          <div className="p-7 sm:p-10 md:p-12">
            {submitted ? (
              <div
                className="flex min-h-96 flex-col items-center justify-center text-center"
                role="status"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-wedding-band text-primary-foreground">
                  <Check className="size-6" />
                </span>
                <h3 className="mt-6 text-4xl text-primary">{t("Your reply is received.")}</h3>
                <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
                  {t(
                    attendance === "accept"
                      ? "We are delighted you’ll be celebrating with us."
                      : "You will be missed, and we’re grateful you let us know.",
                  )}
                </p>
                <Button variant="link" className="mt-5" onClick={() => setSubmitted(false)}>
                  {t("Update response")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="guest-name">{t("Your name")}</Label>
                    <Input
                      id="guest-name"
                      name="name"
                      required
                      placeholder={t("Full name")}
                      className={fieldClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guest-email">{t("Email address")}</Label>
                    <Input
                      id="guest-email"
                      name="email"
                      type="email"
                      required
                      placeholder={t("you@example.com")}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guest-phone">{t("Phone number")}</Label>
                  <Input
                    id="guest-phone"
                    name="phone"
                    type="tel"
                    placeholder={t("Phone number")}
                    className={fieldClass}
                  />
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-medium">
                    {t("Will you be attending?")}
                  </legend>
                  <RadioGroup
                    value={attendance}
                    onValueChange={(value) => setAttendance(value as Attendance)}
                    className="grid gap-3 sm:grid-cols-2"
                  >
                    <Label htmlFor="accept" className={choiceClass}>
                      <RadioGroupItem value="accept" id="accept" />
                      {t("Joyfully accepts")}
                    </Label>
                    <Label htmlFor="decline" className={choiceClass}>
                      <RadioGroupItem value="decline" id="decline" />
                      {t("Regretfully declines")}
                    </Label>
                  </RadioGroup>
                </fieldset>

                {attendance === "accept" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="party-size">{t("Number of guests")}</Label>
                      <Input
                        id="party-size"
                        name="partySize"
                        type="number"
                        min="1"
                        max="6"
                        defaultValue="1"
                        className={fieldClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="meal">{t("Meal preference")}</Label>
                      <select
                        id="meal"
                        name="meal"
                        className="h-11 w-full border border-input bg-background px-3 text-sm text-foreground"
                      >
                        <option value="">{t("Select a preference")}</option>
                        {MEAL_OPTIONS.map((meal) => (
                          <option key={meal} value={meal}>
                            {t(meal)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">{t("A note for the couple")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("Share a wish or dietary requirement…")}
                    className="min-h-24 rounded-none text-base sm:text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full rounded-none text-xs uppercase tracking-normal"
                >
                  {t("Send RSVP")}
                  <ArrowUpRight />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function RsvpIntro() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-64 overflow-hidden bg-wedding-band p-7 text-primary-foreground md:min-h-full md:p-12">
      <img
        src={storyDetail}
        alt={t("Wedding rings and burgundy stationery")}
        width={1280}
        height={1024}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-rsvp-overlay" aria-hidden />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <SectionLabel light>Kindly reply</SectionLabel>
          <h2 className="mt-5 text-5xl leading-none">
            {t("Will you")}
            <br />
            {t("join us?")}
          </h2>
        </div>
        <p className="mt-12 max-w-xs font-display text-xl italic text-primary-foreground/85">
          {t("We hope to celebrate with you. Please respond by July 1, 2027.")}
        </p>
      </div>
    </div>
  );
}
