import type { Metadata } from "next";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy — SpainWhao",
  description: "Privacy policy for SpainWhao S.L.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:pt-40">
        <h1 className="font-serif text-3xl font-medium text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-mute">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-mute">
          <section>
            <h2 className="font-sans text-base font-medium text-ink">
              1. Data Controller
            </h2>
            <p className="mt-3">
              SpainWhao S.L., with registered address in Moraira, Alicante,
              Spain, is the data controller responsible for your personal data
              in accordance with the General Data Protection Regulation (GDPR)
              and Spain&apos;s Organic Law 3/2018 on Data Protection (LOPDGDD).
            </p>
            <p className="mt-2">
              Contact: <a href="mailto:contact@spainwhao.com" className="text-sage underline">contact@spainwhao.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-medium text-ink">
              2. Data We Collect
            </h2>
            <p className="mt-3">
              When you use our contact form, we collect: your name, email
              address, property of interest, preferred dates, and message
              content. We do not collect data automatically through cookies or
              tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-medium text-ink">
              3. Purpose & Legal Basis
            </h2>
            <p className="mt-3">
              We process your personal data to respond to your enquiry about
              our rental properties or development projects. The legal basis
              is your consent (Article 6(1)(a) GDPR), which you provide by
              submitting the contact form, and our legitimate interest in
              responding to potential customers (Article 6(1)(f) GDPR).
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-medium text-ink">
              4. Data Retention
            </h2>
            <p className="mt-3">
              We retain your contact form data for up to 24 months after your
              last interaction with us, or until you request deletion,
              whichever comes first.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-medium text-ink">
              5. Data Sharing
            </h2>
            <p className="mt-3">
              We do not sell your personal data. Form submissions are processed
              by Netlify Inc. (our hosting provider) under their data processing
              agreement. We may share your data with property management
              partners solely for the purpose of fulfilling your booking
              enquiry.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-medium text-ink">
              6. Your Rights
            </h2>
            <p className="mt-3">
              Under GDPR, you have the right to access, rectify, erase, or
              restrict processing of your personal data, as well as the right
              to data portability and to withdraw consent at any time. To
              exercise these rights, contact us
              at <a href="mailto:contact@spainwhao.com" className="text-sage underline">contact@spainwhao.com</a>.
            </p>
            <p className="mt-2">
              You also have the right to lodge a complaint with Spain&apos;s
              data protection authority (Agencia Espa&ntilde;ola de
              Protecci&oacute;n de Datos — AEPD) at <span className="text-ink">www.aepd.es</span>.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-base font-medium text-ink">
              7. Changes
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. The &ldquo;last
              updated&rdquo; date at the top reflects the most recent revision.
            </p>
          </section>
        </div>

        <div className="mt-16">
          <a
            href="/"
            className="text-sm text-sage transition-colors hover:text-ink"
          >
            &larr; Back to SpainWhao
          </a>
        </div>
      </div>
    </div>
  );
}
