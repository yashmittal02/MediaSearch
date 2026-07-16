import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-16 border-t border-white/10 bg-[var(--c1)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-8 lg:flex-row">
        {/* Left */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold text-[var(--c4)]">Yash Mittal</h2>

          <p className="mt-2 max-w-md text-sm leading-7 text-gray-400">
            Built with React, Redux Toolkit, Tailwind CSS and multiple media
            APIs to provide a fast and modern search experience.
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-xl border border-white/20 bg-[var(--c4)] px-5 py-2 font-medium text-[var(--c1)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            🔍 Search
          </Link>

          <Link
            to="/collection"
            className="rounded-xl border border-white/20 bg-[var(--c4)] px-5 py-2 font-medium text-[var(--c1)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            📁 Collection
          </Link>

          <a
            href="https://yashmittal02.github.io/online-cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-5 py-2 font-medium text-[var(--c4)] transition-all duration-300 hover:bg-[var(--c4)] hover:text-[var(--c1)] hover:scale-105 active:scale-95"
          >
            🌐 Portfolio
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="rounded-full border border-white/20 p-3 text-xl text-[var(--c4)] transition-all duration-300 hover:scale-110 hover:bg-[var(--c4)] hover:text-[var(--c1)] active:scale-95"
            title="Back to Top"
          >
            ↑
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yash Mittal • Made with ❤️ using React &
        Redux Toolkit
      </div>
    </footer>
  );
};

export default Footer;
