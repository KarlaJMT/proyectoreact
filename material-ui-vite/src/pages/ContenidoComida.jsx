import React from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, Typography } from "@mui/material";


export default function ContenidoComida({data}) {
  console.log('Datos desde padre: ', data)

  return (
    <div>
      {
        !data || data.length === 0 ? (
          <Typography variant="h4" color="initial">No hay datos para mostrar.</Typography>
        ) : (
          // <Typography variant="h3" color="initial">Cargando datos.</Typography>
          <Grid container padding={4} spacing={3}>
            {data.map((recetaData, index) => (
              <Grid key={index} size={{ xs: 6, md: 4 }}>
                <Paper>
                  <img src={recetaData.strMealThumb} width={280} alt="" />
                  <p>Comida: {recetaData.strMeal}</p>
                  <p>ID: {recetaData.idMeal}</p>
                  <p></p>
                  <p>
                    {/* descipcion, ingredientes, boton de youtube, y lo más importante de la api */}
                  </p>
                </Paper>
              </Grid>
              ))}
          </Grid>
        )
      }
    </div>
  );
};