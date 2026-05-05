import Image from "next/image";
import {
  rentals,
  RentalProperty,
  VILLA_LA_BARRACA,
  VILLA_LA_BARRACA_ABOUT_IMAGE,
} from "@/data/properties";
import { projects, Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-lg font-medium text-ink">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-mute">{project.location}</p>
        <p className="mt-2 text-sm text-mute leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function RentalCard({ rental }: { rental: RentalProperty }) {
  return (
    <div className="group overflow-hidden rounded-sm border border-line bg-white">
      {rental.hasPhotography && rental.heroImage ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={rental.heroImage}
            alt={rental.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-sage/15">
          <p className="font-sans text-sm text-sage">Photography coming soon</p>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-ink">
          {rental.name}
        </h3>
        <p className="mt-1 text-sm text-mute">{rental.location}</p>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          {rental.tagline}
        </p>
        <div className="mt-5">
          {rental.status === "available" ? (
            <a
              href={rental.bookingUrl ?? "#contact"}
              className="inline-block rounded-sm bg-sage px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-sage/90"
            >
              Check availability
            </a>
          ) : (
            <span className="inline-block rounded-full bg-sage/10 px-4 py-1.5 text-xs font-medium text-sage">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-line bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex-shrink-0">
            <Image
              src="/images/logo/spainwhao.png"
              alt="SpainWhao — Home"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>
          <div className="hidden gap-8 font-sans text-sm text-mute sm:flex">
            <a href="#rentals" className="transition-colors hover:text-ink">
              Rentals
            </a>
            <a href="#projects" className="transition-colors hover:text-ink">
              Projects
            </a>
            <a href="#about" className="transition-colors hover:text-ink">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-ink">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative h-[85vh] w-full">
        <Image
          src={VILLA_LA_BARRACA.heroImage!}
          alt={VILLA_LA_BARRACA.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center">
          <h1 className="font-serif text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
            Houses in Spain,
            <br />
            <em className="font-light">designed and lived in</em>
          </h1>
          <p className="mt-4 max-w-md font-sans text-sm text-white/80">
            Family-owned property development and rentals on the Costa Blanca
            and in Madrid.
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-sage">
              About SpainWhao
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
              We build homes
              <br />
              we&apos;d live in ourselves
            </h2>
            <p className="mt-6 leading-relaxed text-mute">
              SpainWhao S.L. is a family-run property company based on
              Spain&apos;s Costa Blanca. We design, build, and manage homes that
              blend contemporary architecture with the warmth of Mediterranean
              living. Every project reflects our belief that great spaces start
              with honest materials, natural light, and a deep respect for the
              landscape.
            </p>
            <p className="mt-4 leading-relaxed text-mute">
              From coastal villas to city apartments, we handle every stage —
              from land acquisition and architectural design through
              construction, interior styling, and ongoing rental management.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={VILLA_LA_BARRACA_ABOUT_IMAGE}
              alt="Villa La Barraca interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Rentals ── */}
      <section id="rentals" className="border-t border-line bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-sage">
            Rentals
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
            Stay in one of our homes
          </h2>
          <p className="mt-4 max-w-2xl text-mute">
            Our rental properties are designed with the same care as our
            developments — fully furnished, beautifully styled, and ready for
            your stay.
          </p>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rentals.map((rental) => (
              <RentalCard key={rental.slug} rental={rental} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-sans text-xs font-medium uppercase tracking-widest text-sage">
          Projects
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
          Built with care, from coast to capital
        </h2>
        <p className="mt-4 max-w-2xl text-mute">
          A portfolio of homes we&apos;ve designed and built on Spain&apos;s
          Costa Blanca.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        className="border-t border-line bg-white py-24 text-center"
      >
        <div className="mx-auto max-w-lg px-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-sage">
            Get in Touch
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            Let&apos;s talk
          </h2>
          <p className="mt-4 text-mute">
            Whether you&apos;re interested in renting one of our properties,
            investing in a development, or just want to say hello —
            we&apos;d love to hear from you.
          </p>
          <a
            href="mailto:contact@spainwhao.com"
            className="mt-8 inline-block rounded-sm bg-sage px-8 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-sage/90"
          >
            contact@spainwhao.com
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs text-mute">
            &copy; {new Date().getFullYear()} SpainWhao S.L. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-mute">
            <a href="#rentals" className="transition-colors hover:text-ink">
              Rentals
            </a>
            <a href="#projects" className="transition-colors hover:text-ink">
              Projects
            </a>
            <a href="#about" className="transition-colors hover:text-ink">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-ink">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
