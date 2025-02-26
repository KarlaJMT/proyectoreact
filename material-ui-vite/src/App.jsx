import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

//import { AlumnoPromedio } from './Components/AlumnoPromedio';
import  ComponenteEncabezado  from './Components/ComponenteEncabezado';
// import ListaProductos from './Components/ListaProductos';
//  import ProductosLista from './Components/ProductosLista';
// import MiProyecto from './Components/miniproyecto/MiProyecto';
import HomePage from './pages/HomePage';

export default function App () {
  return (
    <div>
   <ComponenteEncabezado/>
   {/* <ProductosLista/> */}
   {/* <MiProyecto/> */}
   <HomePage/>
    </div>
    
    
  );
}

// export default function BasicButtons() {
//   return (
//     <>

//     <AlumnoPromedio />


//     {/* <button variant="outlined" color="primary"> Dame Click.
//     </button>

//     <muiDivider/> */}
//     </>




    // <Stack spacing={2} direction="row">
    //   <Button variant="text">Text</Button>
    //   <Button variant="contained">Contained</Button>
    //   <Button variant="outlined">Outlined</Button>
    // </Stack>
//   );
// }
