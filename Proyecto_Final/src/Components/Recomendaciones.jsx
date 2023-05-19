import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/bodas.jpg";
import img2 from "../assets/cocteles.jpg";
import img3 from "../assets/cumpleanios.jpg";
import img4 from "../assets/empresarial.jpg";



        const photos = [
          {
            id: 1,
            imageUrl: img1,
            comment: " Muy buen servicio de catering Daniela es una joven chef que junto a Nicolás, tienen una empresa que ofrece servicio de catering y eventos. Su comida es excelente, y son muy buenos asesores para la producción de algún evento, siempre tienen alguna sugerencia entretenida y buenos precios.",
            rating: 4,
          },
          {
            id: 2,
            imageUrl: img2,
            comment: "para se comer com bom gosto e servido por um pessoal de primeira, lugar bastante gostoso de se frequentar",
            rating: 3,
          },
          {
            id: 3,
            imageUrl: img3,
            comment: "Mala experiencia , mal preparado , si. Reclamas se enojan y las caridades no corresponden a los altos valores Pésima atención. Los platos están sobrevalorados pedimos un churrusco y venía con muy poca carne más tomate y pan enorme",
            rating: 3,
          },
          {
            id: 4,
            imageUrl: img4,
            comment: "El servicio regular se demoro practicamente 1 hra en llegar la comida se confundieron con los platos, falta capacitación de los garzones. Punto alto el trato",
            rating: 3,
          },
         
          
          // Agrega más objetos de fotos según sea necesario
        ];
        
        const Recomendaciones = () => {
          return (
            <div className="photo-slider">
              {photos.map((photo) => (
                <div key={photo.id} className="card">
                  <img className='puntos' src={photo.imageUrl} alt={`Foto ${photo.id}`} />
                  <p>{photo.comment}</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={star <= photo.rating ? "filled" : ""}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        };
        
        export default Recomendaciones;
        