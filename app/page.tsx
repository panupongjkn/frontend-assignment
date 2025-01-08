import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li>
            Todo List{" "}
            <a className="underline" href="/todo-list">
              (Link)
            </a>
          </li>
          <li>
            Create data from API (With UI){" "}
            <a className="underline" href="/data-api">
              (Link)
            </a>
          </li>
          <li>
            Create data from API (API){" "}
            <Link className="underline" href="/api/department">
              (Link)
            </Link>
          </li>
          <li>
            Source Code{" "}
            <a
              className="underline"
              href="https://github.com/panupongjkn/frontend-assignment"
              target="_blank"
              rel="noopener noreferrer"
            >
              (Link)
            </a>
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Powered by Panupong Joknoi</p>
      </footer>
    </div>
  );
}
