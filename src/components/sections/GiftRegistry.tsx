import { useState } from "react";
import { Check, Copy, Gift, Landmark } from "lucide-react";

import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";

const BANK_NAME = "Awash Bank";
const ACCOUNT_NUMBER = "01347844455300";

export function GiftRegistry() {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyAccountNumber() {
    try {
      await navigator.clipboard.writeText(ACCOUNT_NUMBER);
    } catch {
      // Fallback for browsers without the Clipboard API (or non-secure contexts).
      const textarea = document.createElement("textarea");
      textarea.value = ACCOUNT_NUMBER;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="gifts" className="scroll-mt-18 px-5 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        eyebrow="With gratitude"
        title="Gift Registry"
        description="Your presence is the greatest gift of all. Thank you for celebrating this beautiful chapter with us."
      />

      <div className="mx-auto mt-12 max-w-md">
        {!revealed ? (
          <div className="flex justify-center">
            <Button className="h-12 rounded-none px-8" onClick={() => setRevealed(true)}>
              <Gift />
              {t("Send a gift")}
            </Button>
          </div>
        ) : (
          <article className="border border-border bg-card p-6 text-center">
            <Landmark className="mx-auto size-6 text-accent" />
            <p className="mt-5 text-xs uppercase text-muted-foreground">{t("Bank transfer")}</p>
            <h3 className="mt-3 text-2xl text-primary">{BANK_NAME}</h3>

            <p className="mt-5 text-xs uppercase text-muted-foreground">{t("Account number")}</p>
            <p className="mt-2 select-all break-all font-mono text-2xl tracking-wider text-foreground">
              {ACCOUNT_NUMBER}
            </p>

            <Button
              variant="outline"
              className="mt-6 h-11 w-full rounded-none"
              onClick={copyAccountNumber}
            >
              {copied ? <Check /> : <Copy />}
              {copied ? t("Copied!") : t("Copy account number")}
            </Button>

            <span className="sr-only" role="status">
              {copied ? t("Account number copied") : ""}
            </span>

            <Button
              variant="link"
              className="mt-3 text-muted-foreground"
              onClick={() => setRevealed(false)}
            >
              {t("Hide details")}
            </Button>
          </article>
        )}
      </div>
    </section>
  );
}