import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#about" className="nav-link">
        About
      </a>
      <a href="home" className="nav-link">
        Home
      </a>
      <button
        onClick={() => (window.location.href = "/portfolio")}
        classNam="btn btn-primary"
      >
        Portfolio
      </button>
      <a href="#contact" className="nav-link">
        Contact
      </a>
    </div>
  );
};

export default Navbar;
