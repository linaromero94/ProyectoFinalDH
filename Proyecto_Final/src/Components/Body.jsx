import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Categorias from "./Categorias";
import Recomendaciones from "./Recomendaciones";

const categoriasList = [
  { label: "Cocteles", idCategoria: 1, img: "/src/assets/cocteles.jpg" },
  { label: "Bodas", idCategoria: 2, img: "/src/assets/bodas.jpg" },
  { label: "Empresarial", idCategoria: 3, img: "/src/assets/empresarial.jpg" },
  { label: "Cumpleaños", idCategoria: 4, img: "/src/assets/cumpleanios.jpg" },
];

const Body = () => {
  return (

    <div className="contenido-body">
      <div className="estiloBuscador">
        <form className="claseformBuscador">
          <input  type="text" placeholder="Buscar..." />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categoriasList}
            className="combo-box-demo"
            renderInput={(params) => (
              <TextField {...params} label="Categorías" />
            )}
          />
          <button className="btn-donate" type="submit">
            Buscar
          </button>
        </form>
      </div>
      <br></br>
      <h1>
        Busca por categorías
      </h1>
      <br></br>
      <Categorias categoriasList={categoriasList} />
      <h1>Recomendado</h1>
      <Recomendaciones/>
    </div>
    
  );
};

export default Body;