import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Logo from "../../assets/Logo.png";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/cursos", label: "Cursos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-area" onClick={() => setMenuOpen(false)}>
          <img src={Logo} alt="Colégio UniMaster" />
        </Link>

        <nav className={`menu ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
    </header>
  );
}
