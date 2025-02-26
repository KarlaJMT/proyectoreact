import React, { use } from "react";
import Grid from '@mui/material/Grid2';
import { TextField, Button, Card } from "@mui/material";
import ContenidoComida from './ContenidoComida';
// import { useEffect } from "react";

export default function HomePage() {

    const [textobuscar, setTextoB] = React.useState('');

    const [datos, setDatos] = React.useState(
        { meals: [] }
    );

    console.log("Contenido input: ", textobuscar);

    const obtenercomidaxnombre = async () => {
        const buscar = textobuscar.trim();
        if (textobuscar === "") {
            alert("Campos vacíos, escribe algo.")
        } else {
            
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };
              
              try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${buscar}`, requestOptions);
                const result = await response.json();
                setDatos(result)
                console.log(result)
              } catch (error) {
                console.error(error);
              };
            };

        }


        React.useEffect(() => {
            const obtenerdata = async () => {
              try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=beef`);
                const result = await response.json();
                setDatos(result);
              } catch (error) {
                console.error('Error al obtener los datos:', error);
              }
            };
            obtenerdata();
          }, []);
    
    return (
        <div>
            <br />

            <Grid container spacing={2} padding={4} alignItems="center">
                <Grid item xs={8} md={8}>
                    <Card variant="outlined">
                        <TextField onChange={e=>setTextoB(e.target.value)}
                            label='Pon nombre de comida'
                            fullWidth
                            size="medium"
                            id="food-name"
                            aria-label="Introduce el nombre de la comida"
                        />
                    </Card>
                </Grid>
                <Grid item xs={4} md={4}>
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ height: '56px' }}
                        aria-label="Buscar comida" onClick={obtenercomidaxnombre}>Buscar</Button>
                </Grid>
            </Grid>

            <ContenidoComida data={datos.meals}/>
        </div>
    );
};