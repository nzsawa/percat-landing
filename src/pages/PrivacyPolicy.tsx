import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-white/70">Last updated: August 29, 2025</p>

        <section className="mt-10 space-y-4 text-white/80">
          <p>
            Welcome to Percat.app ("Percat", "we", "our", or "us"). We care deeply about your
            privacy and designed Percat to be private by default. This Privacy Policy explains what
            we collect, why we collect it, how we use it, and the choices you have.
          </p>
          <p>
            By using Percat, you agree to this Privacy Policy. If you do not agree, please do not
            use Percat.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <div className="mt-4 space-y-3 text-white/80">
            <p>
              - Account info: email address, display name, and password hash (never your plain
              password).
            </p>
            <p>
              - Content you add: links you save, titles, notes, tags, collections, and
              interactions (e.g., likes, shares within Percat).
            </p>
            <p>
              - Usage data: basic event telemetry (e.g., feature usage, performance, crash logs)
              to improve reliability.
            </p>
            <p>
              - Device data: browser type, OS, approximate region based on IP for fraud
              prevention and abuse mitigation.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">How We Use Information</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>Provide and maintain Percat’s core functionality.</li>
            <li>Classify and organize your saved content using on-device and server-side models.</li>
            <li>Understand feature performance and prioritize improvements.</li>
            <li>Detect, prevent, and respond to security incidents and abuse.</li>
            <li>Communicate with you about updates, support, and new features.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="mt-4 text-white/80">
            We retain account data for as long as your account is active. You can delete your
            account at any time from the app or by contacting support. When you delete your account,
            we permanently remove your content and personal information from our primary systems
            within 30 days, with backups aging out within 90 days.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Sharing and Disclosure</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>We do not sell your personal information.</li>
            <li>
              We may share data with subprocessors who help us run Percat (e.g., infrastructure,
              analytics). These providers are bound by confidentiality and data protection
              obligations.
            </li>
            <li>
              We may disclose information if required by law or to protect our rights, users, or the
              public.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Your Choices</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>Access and update your profile information from account settings.</li>
            <li>Export your saved content and metadata upon request.</li>
            <li>Delete your account at any time to remove your data.</li>
            <li>Opt out of non-essential product emails.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Security</h2>
          <p className="mt-4 text-white/80">
            We use industry-standard measures to protect your data, including encryption in transit,
            role-based access controls, and continuous monitoring. However, no method of transmission
            or storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
          <p className="mt-4 text-white/80">
            Percat is not directed to children under 13, and we do not knowingly collect personal
            information from children. If you believe a child has provided us personal data, contact
            us to remove it.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">International Users</h2>
          <p className="mt-4 text-white/80">
            If you access Percat from outside your country, note that your information may be
            transferred to and processed in other jurisdictions where our or our providers’ servers
            are located.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p className="mt-4 text-white/80">
            We may update this Privacy Policy to reflect changes to our practices. We will post the
            updated policy with a new "Last updated" date and, when appropriate, notify you through
            the product or email.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-white/80">
            Questions or requests? Email us at <span className="underline">privacy@percat.app</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

