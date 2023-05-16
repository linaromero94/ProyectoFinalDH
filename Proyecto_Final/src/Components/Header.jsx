import React from 'react';
import img from "../assets/logo3.png"

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a href="/"><img src={img} alt="Logo de la empresa" className="logotipo" style={{ marginRight: "15px" }}/> </a>
 
          <a href="/" className='slogan-header'><h1 style={{ fontFamily:"serif",fontSize: "25px", marginLeft: "-300px",textShadow:" 2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.5)"
            }} >Celebra la vida, celebra con nosotros...</h1></a>
        <div className="header-right">
          <button>Crear cuenta</button>
          <button>Iniciar sesión</button>
        </div>
      </div>
    </header>
  );
};


export default Header;
