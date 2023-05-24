import React from 'react';
import img from "../assets/logo3.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <a href='#' className='logoPrincipal'>
        <Link to="/"><img src={img} alt="" /></Link>
      </a>
      <a href="#">
        <Link to="/"><h2>Celebra la vida, celebra con nosotros...</h2></Link>
      </a>
      <div className='contenedorBtn'>
      <Link to="/registro"><button className='btn-donate'>Crear cuenta</button></Link>
      <Link to="/inicio"><button className='btn-donate'>Iniciar sesión</button></Link>
      </div>
    </header>
  );
};


export default Header;
