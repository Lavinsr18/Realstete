import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="header">
        <h1>100 Acress.com</h1>
        <nav className="head">
          <a href="#about">Home</a>
          <a href="#about">About</a>
          <a href="#properties">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="login">
          <FaUser style={{ marginRight: "8px" }} />
          Log In
        </button>
      </header>
    </>
  );
}

export default Header;
