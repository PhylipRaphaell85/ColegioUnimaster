import "./Navbar.css";

import Logo from "../../assets/Logo.png";

import { useState } from "react";

import { Link } from "react-router-dom";

import {
  Menu,
  X
} from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <div className="logo-area">

          <img
            src={Logo}
            alt="Logo UniMaster"
          />

        </div>

        {/* MENU */}

        <nav className={`menu ${menuOpen ? "active" : ""}`}>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>

          <Link
            to="/cursos"
            onClick={() => setMenuOpen(false)}
          >
            Cursos
          </Link>

          <Link
            to="/sobre"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </Link>

          <Link
            to="/contato"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>

        </nav>

        {/* BOTÃO MOBILE */}

        <div
          className="menu-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ? <X size={30} />
              : <Menu size={30} />
          }

        </div>

      </div>

    </header>

  );
}