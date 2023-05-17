import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const Categorias = ({ categoriasList }) => {
  return (
    <div className="cardsCategorias">
      {categoriasList.map((valueCard) => {
        return (
          <Card className="card" key={valueCard.label}>
            <CardMedia
              component="img"
              height="120"
              alt={valueCard.label}
              image={valueCard.img}
              title={valueCard.label}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {valueCard.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                texto
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Categorias;
