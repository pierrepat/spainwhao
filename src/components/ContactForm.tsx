"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded border border-sage/30 bg-sage/5 p-8 text-center">
        <h3 className="font-serif text-xl font-medium text-ink">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-mute">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
          });
          setSubmitted(true);
        } catch {
          setSubmitted(true);
        }
      }}
      className="space-y-5 text-left"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1.5 w-full rounded border border-line bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sage"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1.5 w-full rounded border border-line bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sage"
          />
        </div>
      </div>

      <div>
        <label htmlFor="property" className="block text-sm font-medium text-ink">
          Property of interest
        </label>
        <select
          id="property"
          name="property"
          className="mt-1.5 w-full rounded border border-line bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sage"
        >
          <option value="">General enquiry</option>
          <option value="Villa La Barraca">Villa La Barraca</option>
          <option value="Flat by the Sea">Flat by the Sea</option>
          <option value="Claudio Coello XVIII">Claudio Coello XVIII</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1.5 w-full resize-none rounded border border-line bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-sage"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded bg-sage px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-sage/85 sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
