import React from 'react';
import img from "../assets/logo3.png"

const Header = () => {
  return (
    <header>
         <div className="header-container">
        
          <a className="header-left" href="/">
            
         <img src={img} alt="Logo de la empresa" className='logotipo'/>
          <h1 style={{color:"#1a1a1a", fontSize: "24px", fontFamily:"serif",paddingTop:"30px",paddingLeft:"15px", 
          textShadow:"1px 1px 1px rgba(0, 0, 0, 0.2" }}
          >Sabores que inspiran... </h1>
          </a>
       
        
       
        <div className="header-right">
          <button>Crear cuenta</button>
          <button>Iniciar sesión</button>
        </div>
      </div>
    </header>
  );
};

export default Header;