import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Registro from "./Components/Registro";
import InicioSesion from "./Components/InicioSesion";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio" element={<InicioSesion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

