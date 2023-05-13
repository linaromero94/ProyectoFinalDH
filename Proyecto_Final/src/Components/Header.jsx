import React from 'react';
import img from "../assets/logo.png"

const Header = () => {
  return (
    <header>
         <div className="header-container">
        <div className="header-left">
        <img src={img} alt="Logo de la empresa" className='logotipo'/>
          <h1 style={{ fontSize: "24px" }}>El lema de la empresa</h1>
          {/* Aquí puedes agregar el logotipo y el lema de la empresa */}
        </div>
        <div className="header-right">
          <button>Crear cuenta</button>
          <button>Iniciar sesión</button>
        </div>
      </div>
    </header>
  );
};
