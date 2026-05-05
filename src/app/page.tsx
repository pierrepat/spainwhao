import Image from "next/image";
import {
  rentals,
  RentalProperty,
  VILLA_LA_BARRACA,
  VILLA_LA_BARRACA_ABOUT_IMAGE,
} from "@/data/properties";
import { projects, Project } from "@/data/projects";
import { Nav } from "@/components/Nav";

/* ── Cards ── */

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
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
    </div>
  );
}

function RentalCardSmall({ rental }: { rental: RentalProperty }) {
  return (
    <div className="group overflow-hidden rounded border border-line bg-white">
      <div className="flex aspect-[16/9] items-center justify-center bg-sage/10">
        <p className="font-sans text-sm text-sage/70">Photography coming soon</p>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-lg font-medium text-ink">
          {rental.name}
        </h3>
        <p className="mt-1 text-sm text-mute">{rental.location}</p>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          {rental.tagline}
        </p>
        <span className="mt-4 inline-block rounded-full bg-sage/10 px-4 py-1.5 text-xs font-medium text-sage">
          Coming soon
        </span>
      </div>
    </div>
  );
}

/* ── Page ── */

export default function Home() {
  const otherRentals = rentals.filter((r) => r.slug !== "villa-la-barraca");

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-screen w-full">
        <Image
          src={VILLA_LA_BARRACA.heroImage!}
          alt={VILLA_LA_BARRACA.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-24 text-center">
          <h1 className="max-w-2xl font-serif text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Houses in Spain,
            <br />
            <em>designed and lived in</em>
          </h1>
          <p className="mt-5 max-w-md font-sans text-base text-white/75">
            Family-owned property development and rentals
            <br className="hidden sm:block" />
            on the Costa Blanca and in Madrid.
          </p>
          <a
            href="#rentals"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 font-sans text-sm text-white/90 transition-all hover:border-white/60 hover:text-white"
          >
            Explore our properties
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-y-px">
              <path d="M7 1v12m0 0l5-5m-5 5L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Rentals ── */}
      <section id="rentals" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
            Rentals
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
            Stay in one of our homes
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            Fully furnished, beautifully styled, and ready for your stay.
          </p>

          {/* Featured: Villa La Barraca */}
          <div className="mt-16 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src={VILLA_LA_BARRACA.heroImage!}
                alt={VILLA_LA_BARRACA.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-sage/10 px-3 py-1 text-xs font-medium text-sage">
                Available now
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium text-ink sm:text-3xl">
                {VILLA_LA_BARRACA.name}
              </h3>
              <p className="mt-1 text-sm text-mute">
                {VILLA_LA_BARRACA.location}
              </p>
              <p className="mt-5 leading-relaxed text-mute">
                {VILLA_LA_BARRACA.tagline}. A sun-drenched retreat with private
                pool, landscaped gardens, and interiors styled for comfort.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={VILLA_LA_BARRACA.bookingUrl ?? "#contact"}
                  className="inline-block rounded bg-sage px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-sage/85"
                >
                  Check availability
                </a>
                <a
                  href="#contact"
                  className="inline-block rounded border border-line px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:border-sage hover:text-sage"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* Other rentals */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2">
            {otherRentals.map((rental) => (
              <RentalCardSmall key={rental.slug} rental={rental} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
            Projects
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
            Built with care
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            A portfolio of homes we&apos;ve designed and built on Spain&apos;s
            Costa Blanca.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
                About
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
                We build homes
                <br />
                we&apos;d live in ourselves
              </h2>
              <p className="mt-6 leading-relaxed text-mute">
                SpainWhao S.L. is a family-run property company based on
                Spain&apos;s Costa Blanca. We design, build, and manage homes
                that blend contemporary architecture with the warmth of
                Mediterranean living.
              </p>
              <p className="mt-4 leading-relaxed text-mute">
                From coastal villas to city apartments, we handle every stage
                — land acquisition, architectural design, construction,
                interior styling, and ongoing rental management.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src={VILLA_LA_BARRACA_ABOUT_IMAGE}
                alt="Villa La Barraca interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="border-t border-line py-24 text-center sm:py-32">
        <div className="mx-auto max-w-lg px-6">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            Let&apos;s talk
          </h2>
          <p className="mt-4 leading-relaxed text-mute">
            Interested in renting one of our properties, investing in a
            development, or just want to say hello — we&apos;d love to hear
            from you.
          </p>
          <a
            href="mailto:contact@spainwhao.com"
            className="mt-8 inline-block rounded bg-sage px-8 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-sage/85"
          >
            contact@spainwhao.com
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-line bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-sans text-xs text-mute">
            &copy; {new Date().getFullYear()} SpainWhao S.L.
          </p>
          <div className="flex gap-8 text-xs text-mute">
            <a href="#rentals" className="transition-colors hover:text-ink">Rentals</a>
            <a href="#projects" className="transition-colors hover:text-ink">Projects</a>
            <a href="#about" className="transition-colors hover:text-ink">About</a>
            <a href="#contact" className="transition-colors hover:text-ink">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
