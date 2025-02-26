import React,{useState} from 'react'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import ListaVerduras from './productos/ListaVerduras'

const ProductosLista = () => {
    const [home, setHome] = useState(false)

    
    const changestate = () => {
        setHome(!home)
    }


    console.log('Tu switch esta: ', home)
  return (
    <div>

        <Switch
          value={home}
          checked={home}
          onChange={changestate}
          inputProps={{ "aria-label": '' }}
          
        />

        <Typography variant={home ? 'h2':'h3'} color={home ? "success":"error"}> LUZ CUARTO </Typography>
        <Divider color='secondary'/>
        <ListaVerduras/>

        
    </div>
  )
}

export default ProductosLista