import React from 'react';
import Grid from '@mui/material/Grid2';
import { Paper, Typography, Button } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function ContenidoComida({ data }) {
  console.log('Datos desde padre: ', data)

  return (
    <div>
      {
        !data || data.length === 0 ? (
          <Typography variant="h4" color="initial">No hay datos para mostrar.</Typography>
        ) : (
          // <Typography variant="h3" color="initial">Cargando datos.</Typography>
          <Grid container padding={4} spacing={3}>
            {data.map((recetaData, index) => {

              const ingredients = [];
              for (let i = 1; i <= 20; i++) {
                const ingredient = recetaData[`strIngredient${i}`];
                const measure = recetaData[`strMeasure${i}`];
                if (ingredient && ingredient.trim() !== "") {
                  ingredients.push(`${measure} ${ingredient}`);
                }
              }

              // <Grid container padding={4} spacing={3}>
              //   {data.map((recetaData, index) => (
              //     <Grid key={index} size={{ xs: 6, md: 4 }}>
              //       <Paper>
              //         <img src={recetaData.strMealThumb} width={280} alt="" />
              //         <p>Comida: {recetaData.strMeal}</p>
              //         <p>ID: {recetaData.idMeal}</p>
              //         <Button variant="contained" color="error" startIcon={<YouTubeIcon />} href={recetaData.strYoutube}>YouTube</Button>
              //         <p>Detalles: </p>

              return (
                <Grid key={index} size={{ xs: 4, sm: 6, md: 4 }} >
                  <Paper elevation={3} style={{ padding: '16px', textAlign: 'center' }}>
                    <img src={recetaData.strMealThumb} width={280} alt={recetaData.strMeal} />
                    <Typography variant="h6" style={{ marginTop: '8px' }}>
                      Comida: {recetaData.strMeal}
                    </Typography>
                    <Typography variant="body1" style={{ marginBottom: '8px' }}>
                      ID: {recetaData.idMeal}
                    </Typography>

                    <Button variant="contained" color="error" startIcon={<YouTubeIcon />} href={recetaData.strYoutube} target="_blank"
                      rel="noopener noreferrer" style={{ marginBottom: '16px' }}>Ver en YouTube
                    </Button>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span">Ingredientes</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component="div">
                          <ul style={{ paddingLeft: '20px', textAlign: 'left' }}>
                            {ingredients.map((ingredient, idx) => (<li key={idx}>{ingredient}</li>))}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <Typography component="span">Instrucciones</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ textAlign: 'left' }}>
                          {recetaData.strInstructions}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        )
      }
    </div>
  );
}