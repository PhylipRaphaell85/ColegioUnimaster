import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Cursos from "../pages/Cursos/Cursos";
import Contato from "../pages/Contato/Contato";
import Sobre from "../pages/Sobre/Sobre";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
