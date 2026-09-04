import Link from "next/link";
import { site } from "../data";

export function Header() {
  return (
    <header className="site-head">
      <div className="wrap">
        <Link className="wordmark" href="/">
          Suhani Bhatia
        </Link>
        <nav className="nav" aria-label="Sections">
          <a href="/#work">Work</a>
          <a href="/#projects">Projects</a>
          <a href="/#writing">Writing</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot wrap">
      <span>{site.name}</span>
      <span>Mumbai</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
