import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Cursos from "../pages/Cursos/Cursos";
import Contato from "../pages/Contato/Contato";
import Sobre from "../pages/Sobre/Sobre";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cursos" element={<Cursos/>}/>
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}