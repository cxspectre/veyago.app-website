import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center pt-24">
      <div className="mx-auto max-w-xl px-5 sm:px-8 text-center">
        <div className="text-xs uppercase tracking-widest text-gray-3 mb-5">404</div>
        <h1 className="display text-6xl sm:text-8xl mb-6">Off the map.</h1>
        <p className="text-gray-1 mb-8">
          The page you’re looking for isn’t here. Maybe it’s still in the bracket.
        </p>
        <Link href="/" className="bg-ink-100 text-ink-00 px-5 py-3 rounded-btn font-medium text-sm inline-flex">
          Back home →
        </Link>
      </div>
    </div>
  );
}
