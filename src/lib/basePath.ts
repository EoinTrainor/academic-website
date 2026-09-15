// The deploy workflow sets NEXT_PUBLIC_BASE_PATH (e.g. "/academic-website") for
// GitHub Pages project sites; Next.js applies it automatically to its own
// routing (next/link, next/image) but not to hand-written asset paths like a
// raw <img src="/foo.png">, so those need this prefix added manually.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
