import {  Routes, Route, HashRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NavBar from "../Components/NavBar/NavBar";

import { useAuth } from "../Context/AuthContext";
import Membros from "../Pages/Membros/Membros";
import Carteirinhas from "../Pages/Carteirinhas/Carteirinhas";
import Certificados from "../Pages/Certificados/Certificados";
import NotFound from "../Pages/NotFound/NotFound";

const RoutesApp = () => {
  const { user } = useAuth();
  return (
    <HashRouter>
       {user && <NavBar />}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Login />} />
          {user && <Route path="/membros" element={<Membros />} />}
          {user && <Route path="/carteirinhas" element={<Carteirinhas />} />}
          {user && <Route path="/certificados" element={<Certificados />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </HashRouter>
  );
};

export default RoutesApp;
