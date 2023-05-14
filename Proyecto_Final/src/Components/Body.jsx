import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const categoriasList = [
  { label: "Cocteles" },
  { label: "Bodas" },
  { label: "Empresarial" },
];

const Body = () => {
  return (
    <div className="contenido-body">
      <div className="estiloBuscador">
        <form className="claseformBuscador">
          <input type="text" placeholder="Buscar..." />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={categoriasList}
            className="combo-box-demo"
            renderInput={(params) => (
              <TextField {...params} label="Categorías" />
            )}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div>
        <h1>categorias</h1>
      </div>
      <div>
        <h1>recomendaciones</h1>
      </div>
    </div>
  );
};

export default Body;
