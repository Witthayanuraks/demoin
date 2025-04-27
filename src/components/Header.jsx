function Header() {
  return (
    <header className="text-center py-8 px-4 bg-white">
<h1 className="text-4xl md:text-6xl font-wedding font-bold mb-2">
  Wedding - Harris Maulana & Takanashi Rikka
</h1>
<p className="text-lg md:text-xl text-gray-600 font-[var(--jakarta-sans)]">
  June 24th 2025 
</p>
      <nav
        aria-label="Main navigation"
        className="mt-6 flex justify-center flex-wrap gap-6 font-[var(--jakarta-sans)]"
      >
        <a
          href="#home"
          className="text-gray-700 hover:text-pink-600 transition duration-200 px-3 py-1 rounded-full hover:bg-pink-50"
        >
          Home
        </a>
        <a
          href="#points"
          className="text-gray-700 hover:text-pink-600 transition duration-200 px-3 py-1 rounded-full hover:bg-pink-50"
        >
          Points of Interest
        </a>
        <a
          href="#gallery"
          className="text-gray-700 hover:text-pink-600 transition duration-200 px-3 py-1 rounded-full hover:bg-pink-50"
        >
          Gallery
        </a>
      </nav>
    </header>
  );
}

export default Header;
