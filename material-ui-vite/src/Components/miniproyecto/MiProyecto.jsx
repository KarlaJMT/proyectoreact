import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Tienda from '../miniproyecto/Tienda';
// import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';


const MiProyecto = () => {
    const [tienda, setTienda] = useState(false)


    const handleChange = () => {
        setTienda(!tienda);
    };

    const handleClick = () => {
        alert("Escoge qué comprar por favor.")
    };


    console.log('Escoge qué comprar: ', tienda)
    return (
        <div>

            <FormGroup>
                <FormControlLabel control={
                <Switch checked={tienda} onChange={handleChange} />} label={tienda ? "Libros" : "Bicicletas"} variant={tienda ? 'h4' : 'h4'} color={tienda ? "success" : "error"}/>
            </FormGroup>

            <Button variant="contained" color="primary" onClick={handleClick} sx={{ mt: 2 }} >Salir </Button>

            <Tienda mostrarLibros={tienda}/>

            
        </div>
    )
}

// const theme = createTheme({
//     cssVariables: true,
//     palette: {
//       primary: {
//         main: '#9e1c00',
//       },
//       secondary: {
//         main: '#9e1c00',
//       },
//       error: {
//         main: red.A400,
//       },
//     },
//   });


export default MiProyecto;