import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center pt-20 px-4">
      <div className="text-8xl font-bold text-[#ff6b35]/20 mb-4"
        style={{ fontFamily: "var(--font-heading), sans-serif" }}
      >
        404
      </div>
      <h1
        className="text-3xl sm:text-4xl font-bold text-[#f7f5f2] mb-3"
        style={{ fontFamily: "var(--font-heading), sans-serif" }}
      >
        Page Not Found
      </h1>
      <p className="text-[#9ca3af] mb-8 max-w-sm">
        This page doesn't exist. Let's get you back on track.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
