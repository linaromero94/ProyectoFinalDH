import React from "react";


const Body = () => {
    return(
        <body>
          <div className="estiloCategorias">
            <h1>Título del cuerpo</h1>
            <p>Este es un párrafo en el cuerpo.</p>

            <form>
                <input type="text" placeholder="Buscar..."/>
                <button type="submit">Buscar</button>
            </form>


            <form>
                <input type="text" placeholder="Buscar..."/>
                <button type="submit">Buscar</button>
            </form>
            <ul className="menu">
                <li className="itemMenu">Categoría 1</li>
                <li className="itemMenu">Categoría 2</li>
                <li className="itemMenu">Categoría 3</li>
            </ul>
          </div>
        </body>

    )
}

export default Body