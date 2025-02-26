import React from 'react';
import Grid from '@mui/material/Grid2';
import { Typography, Card } from '@mui/material';
import MiDialogo from './MiDialogo';

export default function ListaProductosDialogo(props) {

    const data = props.data
    console.log(data)

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Consumo de JSON
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined" style={{ padding: 15 }}>
                        <Typography variant="h4" color="textPrimary">
                            Bicicleta en Promo
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            Precio más bajo: {data.bicycle.price}
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            Stock: {data.bicycle.instock ? "Disponible" : "No Hay"}
                        </Typography>
                        <Typography variant="h5" color="textSecondary">
                            Color: {data.bicycle.color}
                        </Typography>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                {data.book && data.book.map((libro, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card variant="outlined" style={{ padding: 15 }}>
                            <Typography variant="h4" color="textPrimary">
                                LIBRO
                            </Typography>
                            <Typography variant="h5" color="textSecondary">
                                Título: {libro.title}
                            </Typography>
                            <Typography variant="h5" color="textSecondary">
                                Autor: {libro.author}
                            </Typography>
                            <Typography variant="h5" color="textSecondary">
                                Categoría: {libro.category}
                            </Typography>
                            <MiDialogo />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}