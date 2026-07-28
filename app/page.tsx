import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full border-b border-zinc-200 bg-white/90 px-6 py-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            <Link href="#" className="hover:text-black dark:hover:text-white">
              Home
            </Link>
            <Link href="/submit" className="hover:text-black dark:hover:text-white">
              Submit
            </Link>
            <Link href="/track" className="hover:text-black dark:hover:text-white">
              Track
            </Link>
          </nav>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-800 shadow-sm transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            aria-label="User profile"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 mx-auto bg-white dark:bg-black sm:items-start">
        Hello World
      </main>
    </div>
  );
}
