import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="border-t border-white/10 bg-[var(--c1)]">
      <hr></hr>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-1 px-2 py-2">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold text-[var(--c4)]">Yash Mittal</h1>
        </div>

        <div className="max-w-xl text-center">
          <p className="text-gray-300 leading-relaxed">
            Built to showcase modern React development with Redux Toolkit,
            Tailwind CSS, and third-party API integration.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-xl border border-white/20 bg-[var(--c4)] px-3 py-2 font-medium text-[var(--c1)] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Search
          </Link>

          <Link
            to="/collection"
            className="rounded-xl border border-white/20 bg-[var(--c4)] px-3 py-2 font-medium text-[var(--c1)] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Collection
          </Link>

          <a
            href="https://yashmittal02.github.io/online-cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 bg-transparent px-3 py-2 font-medium text-[var(--c4)] transition-all duration-300 hover:bg-[var(--c4)] hover:text-[var(--c1)] hover:scale-105 active:scale-95"
          >
            Portfolio ↗
          </a>
          <button
            onClick={scrollToTop}
            className="rounded-4xl border border-white/20 bg-transparent px-5 py-2 font-medium text-[var(--c4)] transition-all duration-300 hover:bg-[var(--c4)] hover:text-[var(--c1)] hover:scale-105 active:scale-95"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
