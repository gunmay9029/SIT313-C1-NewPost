
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-brand">
        GS<span>.</span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Projects</a>
        </li>
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#tutorials">Tutorials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#signup">Daily Insider</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
