import React from 'react';
import img from "../assets/logo3.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">

        <Link to="/">
          <img src={img} alt="Logo de la empresa" className="logotipo"
            style={{ marginRight: "15px" }} />
        </Link>


        <Link to="/"><h1 style={{
          fontFamily: "serif", fontSize: "25px", marginLeft: "-300px", textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.5)"
        }} >Celebra la vida, celebra con nosotros...</h1>
        </Link>


        <div className="header-right">
          <Link to="/registro">  <button>Crear cuenta</button></Link>
          <Link to="/inicio"> <button>Iniciar sesión</button></Link>
        </div>
      </div>
    </header>
  );
};


export default Header;
