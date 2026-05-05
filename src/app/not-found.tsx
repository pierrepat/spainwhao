import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sage">
          404
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-mute">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded bg-sage px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-sage/85"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}
