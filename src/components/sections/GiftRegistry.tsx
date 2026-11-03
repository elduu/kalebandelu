import { useState } from "react";
import { Check, Copy, Gift, Landmark } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";

const BANKS = [
  { name: "Awash Bank", number: "01347844455300" },
  { name: "Commercial Bank of Ethiopia (CBE)", number: "1000282628787" },
];

export function GiftRegistry() {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  async function copyAccountNumber(number: string) {
    try {
      await navigator.clipboard.writeText(number);
    } catch {
      // Fallback for browsers without the Clipboard API (or non-secure contexts).
      const textarea = document.createElement("textarea");
      textarea.value = number;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopiedNumber(number);
    window.setTimeout(() => setCopiedNumber((current) => (current === number ? null : current)), 2000);
  }

  return (
    <section id="gifts" className="scroll-mt-18 px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="With gratitude"
        title="Gift Registry"
        description="Your presence is the greatest gift of all. Thank you for celebrating this beautiful chapter with us."
      />

      <div className="mx-auto mt-12 max-w-3xl">
        {!revealed ? (
          <div className="flex justify-center">
            <Button className="h-12 rounded-none px-8" onClick={() => setRevealed(true)}>
              <Gift />
              {t("Send a gift")}
            </Button>
          </div>
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              {BANKS.map(({ name, number }) => {
                const copied = copiedNumber === number;
                return (
                  <article key={number} className="border border-border bg-card p-6 text-center">
                    <Landmark className="mx-auto size-6 text-accent" />
                    <p className="mt-5 text-xs uppercase text-muted-foreground">
                      {t("Bank transfer")}
                    </p>
                    <h3 className="mt-3 min-h-14 text-xl text-primary sm:text-2xl">{t(name)}</h3>

                    <p className="mt-5 text-xs uppercase text-muted-foreground">
                      {t("Account number")}
                    </p>
                    <p className="mt-2 select-all break-all font-mono text-xl tracking-wider text-foreground">
                      {number}
                    </p>

                    <Button
                      variant="outline"
                      className="mt-6 h-11 w-full rounded-none"
                      onClick={() => copyAccountNumber(number)}
                    >
                      {copied ? <Check /> : <Copy />}
                      {copied ? t("Copied!") : t("Copy account number")}
                    </Button>

                    <span className="sr-only" role="status">
                      {copied ? t("Account number copied") : ""}
                    </span>
                  </article>
                );
              })}
            </div>

            <div className="mt-4 flex justify-center">
              <Button
                variant="link"
                className="text-muted-foreground"
                onClick={() => setRevealed(false)}
              >
                {t("Hide details")}
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}