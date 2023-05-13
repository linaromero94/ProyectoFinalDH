import React from 'react';
import img from "../assets/logo3.png"

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={img} alt="Logo de la empresa" className="logotipo" style={{ marginRight: "15px" }}/>
          <h1 style={{ fontSize: "40px", marginLeft: "100px"}}>Celebra la vida, celebra con nosotros</h1>
        <div className="header-right">
          <button>Crear cuenta</button>
          <button>Iniciar sesión</button>
        </div>
      </div>
    </header>
  );
};


export default Header;
