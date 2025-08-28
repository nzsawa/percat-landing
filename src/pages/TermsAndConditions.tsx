import React from "react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight">Terms & Conditions</h1>
        <p className="mt-3 text-white/70">Last updated: August 29, 2025</p>

        <section className="mt-10 space-y-4 text-white/80">
          <p>
            These Terms & Conditions ("Terms") govern your access to and use of Percat.app
            ("Percat"). By using Percat, you agree to these Terms. If you do not agree, do not use
            Percat.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Eligibility</h2>
          <p className="mt-4 text-white/80">
            You must be at least 13 years old to use Percat. If you are using Percat on behalf of an
            organization, you represent that you have authority to bind that organization.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Your Content</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>You retain ownership of the content you save or upload to Percat.</li>
            <li>
              You grant us a limited, non-exclusive, revocable license to process your content
              solely to provide and improve the service.
            </li>
            <li>
              You are responsible for ensuring you have the right to save and use content in Percat
              and that your use complies with applicable laws and platform terms (e.g., Instagram,
              TikTok, etc.).
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Acceptable Use</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>No unlawful, infringing, or harmful activity.</li>
            <li>No harassment, hate speech, or abusive behavior.</li>
            <li>No reverse engineering or interfering with Percat operations.</li>
            <li>No unauthorized access to data, systems, or accounts.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Beta Features</h2>
          <p className="mt-4 text-white/80">
            Percat may offer experimental or beta features that may change or be discontinued at any
            time. These features are provided as-is and may be less reliable than generally
            available features.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Subscription and Billing</h2>
          <p className="mt-4 text-white/80">
            Certain features may require a paid subscription. Prices, taxes, and billing frequency
            will be shown at the time of purchase. Subscriptions renew automatically unless canceled
            before the renewal date. You can cancel at any time from your account settings, and your
            access continues until the end of the current billing period.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p className="mt-4 text-white/80">
            Percat and its logos, designs, and software are the property of Percat, Inc. and are
            protected by intellectual property laws. You may not copy, modify, or distribute any
            part of Percat without prior written consent, except as permitted by applicable law.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Disclaimers</h2>
          <p className="mt-4 text-white/80">
            Percat is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties,
            express or implied, including but not limited to merchantability, fitness for a
            particular purpose, and non-infringement. We do not guarantee that Percat will be
            uninterrupted, secure, or error-free.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="mt-4 text-white/80">
            To the maximum extent permitted by law, Percat and its affiliates shall not be liable
            for any indirect, incidental, special, consequential, or punitive damages, or any loss
            of profits, data, use, goodwill, or other intangible losses arising from your use of or
            inability to use Percat.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Termination</h2>
          <p className="mt-4 text-white/80">
            We may suspend or terminate your access to Percat if you violate these Terms or if we
            believe it is necessary to protect the service, users, or the public. You may stop using
            Percat at any time and can delete your account from settings.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Changes to the Terms</h2>
          <p className="mt-4 text-white/80">
            We may update these Terms periodically. We will post the updated Terms with a new
            effective date and, where appropriate, notify you through the product or email. Your
            continued use after the changes constitutes acceptance.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p className="mt-4 text-white/80">
            These Terms are governed by the laws of the State of Delaware, excluding its conflict of
            law principles. Any disputes will be resolved in the courts located in Delaware, USA,
            unless otherwise required by applicable law.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-white/80">
            Questions about these Terms? Email us at <span className="underline">legal@percat.app</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

