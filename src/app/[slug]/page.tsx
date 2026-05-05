import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { rentals, getPropertyPhotos, RentalProperty } from "@/data/properties";
import { projects, getProjectRenders, Project } from "@/data/projects";
import { Nav } from "@/components/Nav";
import { PhotoGallery } from "@/components/PhotoGallery";

const WHATSAPP = "34660348606";
const WA_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type PageItem =
  | { type: "rental"; data: RentalProperty }
  | { type: "project"; data: Project };

function findBySlug(slug: string): PageItem | null {
  const rental = rentals.find((r) => r.slug === slug);
  if (rental) return { type: "rental", data: rental };
  const project = projects.find((p) => p.slug === slug);
  if (project) return { type: "project", data: project };
  return null;
}

export function generateStaticParams() {
  return [
    ...rentals.map((r) => ({ slug: r.slug })),
    ...projects.map((p) => ({ slug: p.slug })),
  ];
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = findBySlug(params.slug);
  if (!item) return {};
  const name = item.data.name;
  const desc =
    item.type === "rental" ? item.data.tagline : item.data.description;
  const img =
    item.type === "rental" ? item.data.heroImage : item.data.heroImage;
  return {
    title: `${name} — SpainWhao`,
    description: desc,
    openGraph: {
      title: `${name} — SpainWhao`,
      description: desc,
      images: img ? [img] : [],
    },
  };
}

/* ── Rental Page ── */

function RentalPage({ property }: { property: RentalProperty }) {
  const photos = getPropertyPhotos(property);
  const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(property.whatsappMessage)}`;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] w-full sm:h-[70vh]">
        {property.heroImage && (
          <Image
            src={property.heroImage}
            alt={property.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-12 sm:pb-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {property.rentalType === "long-term"
                  ? "Long-term rental"
                  : "Holiday rental"}
              </span>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {property.location}
              </span>
              {property.rating && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="#F59E0B">
                    <path d="M6 0l1.76 3.57 3.94.57-2.85 2.78.67 3.93L6 8.88 2.48 10.85l.67-3.93L.3 4.14l3.94-.57z" />
                  </svg>
                  {property.rating.score} ({property.rating.reviews} reviews)
                </span>
              )}
            </div>
            <h1 className="mt-3 font-serif text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              {property.name}
            </h1>
            <p className="mt-2 max-w-xl text-base text-white/80">
              {property.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Details + Booking */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl font-medium text-ink">
              About this property
            </h2>
            <p className="mt-5 leading-relaxed text-mute">
              {property.description}
            </p>
            {property.highlights.length > 0 && (
              <>
                <h3 className="mt-10 font-serif text-lg font-medium text-ink">
                  Highlights
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {property.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-mute"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {property.rentalType === "holiday" && (
              <div className="mt-10 rounded border border-line bg-white p-6">
                <h3 className="font-sans text-sm font-medium text-ink">
                  Cancellation policy
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  Free cancellation up to 30 days before check-in for a full
                  refund. Cancellations within 30 days are eligible for a 50%
                  refund. Contact us for flexible arrangements.
                </p>
              </div>
            )}
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-24 rounded border border-line bg-white p-6">
              <h3 className="font-serif text-xl font-medium text-ink">
                {property.rentalType === "long-term"
                  ? "Enquire about availability"
                  : "Book direct & save"}
              </h3>
              <p className="mt-2 text-sm text-mute">
                {property.rentalType === "holiday"
                  ? "Book directly with us and skip platform fees. We\u2019ll confirm availability and send you an invoice."
                  : "Get in touch to discuss availability, lease terms, and arrange a viewing."}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2.5 rounded bg-[#25D366] px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-[#1fb855]"
              >
                {WA_ICON}
                WhatsApp us
              </a>
              <a
                href="mailto:contact@spainwhao.com"
                className="mt-3 flex w-full items-center justify-center rounded border border-line px-6 py-3 font-sans text-sm font-medium text-ink transition-colors hover:border-sage hover:text-sage"
              >
                Email us
              </a>
              {property.externalLinks.length > 0 && (
                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-xs text-mute">Also available on</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {property.externalLinks.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sage underline underline-offset-2 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="border-t border-line bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-2xl font-medium text-ink">Photos</h2>
          <p className="mt-2 text-sm text-mute">
            {photos.length} photos &mdash; click to enlarge
          </p>
          <div className="mt-8">
            <PhotoGallery photos={photos} alt={property.name} />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}

/* ── Project Page ── */

function ProjectPage({ project }: { project: Project }) {
  const renders = getProjectRenders(project);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] w-full sm:h-[70vh]">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 pb-12 sm:pb-16">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Development project
              </span>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {project.location}
              </span>
            </div>
            <h1 className="mt-3 font-serif text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-2 max-w-xl text-base text-white/80">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Renders Gallery */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="font-serif text-2xl font-medium text-ink">
          Architectural renders
        </h2>
        <p className="mt-2 text-sm text-mute">
          {renders.length} renders &mdash; click to enlarge
        </p>
        <div className="mt-8">
          <PhotoGallery photos={renders} alt={project.name} />
        </div>
      </section>
    </>
  );
}

/* ── Page Router ── */

export default function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = findBySlug(params.slug);
  if (!item) notFound();

  return (
    <div className="min-h-screen bg-bg">
      <Nav />

      {item.type === "rental" ? (
        <RentalPage property={item.data} />
      ) : (
        <ProjectPage project={item.data} />
      )}

      {/* Footer */}
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <a
            href="/"
            className="text-sm text-sage transition-colors hover:text-ink"
          >
            &larr; Back to SpainWhao
          </a>
          <p className="font-sans text-xs text-mute">
            &copy; {new Date().getFullYear()} SpainWhao S.L.
          </p>
        </div>
      </footer>
    </div>
  );
}
