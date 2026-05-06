import Image from "next/image";
import type { Metadata } from "next";
import {
  rentals,
  RentalProperty,
  VILLA_LA_BARRACA_ABOUT_IMAGE,
} from "@/data/properties";
import { projects, Project } from "@/data/projects";
import { Nav } from "@/components/Nav";
import { ContactForm } from "@/components/ContactForm";
import { t } from "@/data/i18n";

const s = t("es");

export const metadata: Metadata = {
  title: "SpainWhao — Casas en España, diseñadas y vividas",
  description:
    "Promoción inmobiliaria familiar y alquileres en la Costa Blanca y Madrid. SpainWhao S.L.",
  alternates: { canonical: "https://spainwhao.com/es" },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={`/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <h3 className="mt-4 font-serif text-lg font-medium text-ink">
        {project.name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-mute">
        {project.description}
      </p>
    </a>
  );
}

function RentalFeatured({
  rental,
  reverse = false,
}: {
  rental: RentalProperty;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <a href={`/${rental.slug}`} className="group block">
        {rental.hasPhotography && rental.heroImage ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded">
            <Image
              src={rental.heroImage}
              alt={rental.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center rounded bg-sage/10">
            <p className="font-sans text-sm text-sage/70">Fotos próximamente</p>
          </div>
        )}
      </a>
      <div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-sage">
            {rental.status === "available" ? s.rentals.availableNow : s.rentals.comingSoon}
          </span>
          <span className="inline-block rounded-full border border-line px-3 py-1 text-xs font-medium text-mute">
            {rental.rentalType === "long-term" ? s.rentals.longTerm : s.rentals.holiday}
          </span>
        </div>
        <h3 className="mt-4 font-serif text-2xl font-medium text-ink sm:text-3xl">
          {rental.name}
        </h3>
        <p className="mt-1 text-sm text-mute">{rental.location}</p>
        <p className="mt-5 leading-relaxed text-mute">{rental.description || rental.tagline}</p>
        {rental.highlights.length > 0 && (
          <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {rental.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-mute">
                <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage/60" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`/${rental.slug}`}
            className="inline-block rounded bg-sage px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-sage/85"
          >
            {s.rentals.viewProperty}
          </a>
          <a
            href="#contact"
            className="inline-block rounded border border-line px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:border-sage hover:text-sage"
          >
            {s.rentals.getInTouch}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomeEs() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-screen w-full">
        <Image
          src={rentals[0].heroImage!}
          alt={rentals[0].name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 text-center">
          <h1 className="max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            {s.hero.title1}
            <br />
            <em>{s.hero.title2}</em>
          </h1>
          <p className="mt-5 max-w-md font-sans text-base text-white/75">
            {s.hero.subtitle}
          </p>
          <a
            href="#rentals"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 font-sans text-sm text-white/90 transition-all hover:border-white/60 hover:text-white"
          >
            {s.hero.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-y-px">
              <path d="M7 1v12m0 0l5-5m-5 5L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Alquileres ── */}
      <section id="rentals" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
            {s.rentals.label}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
            {s.rentals.title}
          </h2>
          <p className="mt-4 max-w-xl text-mute">{s.rentals.subtitle}</p>

          <div className="mt-16">
            <RentalFeatured rental={rentals[0]} />
          </div>
          <div className="mt-24 border-t border-line pt-24">
            <RentalFeatured rental={rentals[1]} reverse />
          </div>
          <div className="mt-24 border-t border-line pt-24">
            <RentalFeatured rental={rentals[2]} />
          </div>
        </div>
      </section>

      {/* ── Proyectos ── */}
      <section id="projects" className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
            {s.projects.label}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
            {s.projects.title}
          </h2>
          <p className="mt-4 max-w-xl text-mute">{s.projects.subtitle}</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Nosotros ── */}
      <section id="about" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
                {s.about.label}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
                {s.about.title1}
                <br />
                {s.about.title2}
              </h2>
              <p className="mt-6 leading-relaxed text-mute">{s.about.p1}</p>
              <p className="mt-4 leading-relaxed text-mute">{s.about.p2}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src={VILLA_LA_BARRACA_ABOUT_IMAGE}
                alt="Villa La Barraca jardín y olivo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contact" className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
                {s.contact.label}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
                {s.contact.title}
              </h2>
              <p className="mt-4 leading-relaxed text-mute">
                {s.contact.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="https://wa.me/34660348606?text=Hola%2C%20me%20interesa%20una%20de%20vuestras%20propiedades"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2.5 rounded bg-[#25D366] px-8 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-[#1fb855]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {s.contact.whatsapp}
                </a>
                <a
                  href="mailto:contact@spainwhao.com"
                  className="text-sm text-mute transition-colors hover:text-ink"
                >
                  {s.contact.orEmail}
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── Floating WhatsApp ── */}
      <a
        href="https://wa.me/34660348606?text=Hola%2C%20me%20interesa%20una%20de%20vuestras%20propiedades"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contáctanos por WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── Footer ── */}
      <footer className="border-t border-line bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-sans text-xs text-mute">
            &copy; {new Date().getFullYear()} SpainWhao S.L.
          </p>
          <div className="flex gap-8 text-xs text-mute">
            <a href="#rentals" className="transition-colors hover:text-ink">{s.nav.rentals}</a>
            <a href="#projects" className="transition-colors hover:text-ink">{s.nav.projects}</a>
            <a href="#about" className="transition-colors hover:text-ink">{s.nav.about}</a>
            <a href="#contact" className="transition-colors hover:text-ink">{s.nav.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
