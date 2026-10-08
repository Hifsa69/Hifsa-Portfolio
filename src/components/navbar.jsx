const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-purple-400">
          Hifsa Bashir
        </h1>

        <ul className="hidden md:flex gap-8 text-slate-300">
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#education" className="hover:text-purple-400">Education</a></li>
          <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;