import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import React from "react";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
