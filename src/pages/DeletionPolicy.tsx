import React from "react";

export default function DeletionPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight">Data Deletion Policy</h1>
        <p className="mt-3 text-white/70">Last updated: August 29, 2025</p>

        <section className="mt-10 space-y-4 text-white/80">
          <p>
            This Data Deletion Policy explains how to delete your Percat account and what happens to
            your data when you do. We believe you should always be able to leave with confidence and
            control.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">How to Delete Your Account</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-white/80">
            <li>Open Percat and go to Settings → Account.</li>
            <li>Select “Delete account”.</li>
            <li>Confirm your decision by following the prompts.</li>
            <li>You’ll receive an email confirmation when deletion is complete.</li>
          </ol>
          <p className="mt-4 text-white/80">
            If you cannot access your account, email <span className="underline">support@percat.app</span>
            from your registered email with the subject “Account Deletion Request”.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">What Gets Deleted</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>Your account profile and authentication records.</li>
            <li>All saved links, notes, tags, and collections.</li>
            <li>AI-generated classifications and embeddings associated with your content.</li>
            <li>Collaboration records you initiated (invites, shared spaces you own).</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">What May Be Retained Temporarily</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80">
            <li>
              Backups: Encrypted backups may contain your data for up to 90 days, after which they
              are overwritten as part of routine cycles.
            </li>
            <li>
              Legal and security: We may retain minimal records necessary to comply with law,
              prevent fraud, or enforce our Terms.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Deletion Timeline</h2>
          <p className="mt-4 text-white/80">
            Deletion from active systems is typically completed within 30 days of your request.
            Backup aging completes within 90 days. Some external caches or CDNs, if used, may take a
            short time to expire.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Shared Content</h2>
          <p className="mt-4 text-white/80">
            If you shared content with others or contributed to a shared Space you do not own, those
            copies may remain accessible to other participants. Content within Spaces you own will be
            removed when your account is deleted.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Data Export</h2>
          <p className="mt-4 text-white/80">
            You can request an export of your data (links, notes, tags, collections) before
            deletion. Contact <span className="underline">export@percat.app</span> if the in-app export is
            unavailable.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-white/80">
            For deletion-related questions, reach us at <span className="underline">support@percat.app</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

