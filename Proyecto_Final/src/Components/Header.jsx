import React from 'react';
import img from "../assets/logo3.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <a href='#' className='logoPrincipal'>
        <img src={img} alt="" />
      </a>
      <a href="#">
        <h2>Celebra la vida, celebra con nosotros...</h2>
      </a>
      <div className='contenedorBtn'>
      <button className='btn-donate'>Crear cuenta</button>
      <button className='btn-donate'>Iniciar sesión</button>
      </div>
    </header>
  );
};


export default Header;
