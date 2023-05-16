import React from 'react';
import img from "../assets/logo3.png"

const Header = () => {
  return (
    <header>
        <div className="header-container">
                <img src={img} alt="Logo de la empresa" className='logotipo'/>
                <h1 style={{ fontSize: "24px" }}>Celebra la vida, celebra con nosotros</h1>
          {/* Aquí puedes agregar el logotipo y el lema de la empresa */}
            
            <div className="header-right">
                <button>Crear cuenta</button>
                <button>Iniciar sesión</button>
            </div>
            </div>
    </header>
  );
};


export default Header;
