import React from 'react'
import useState from 'react'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

const ListaProductos = () => {
    const [home, setHome] = useState(false)


    const changestate = () => {
        setHome(!home)
    }

console.log('Tu switch esta: ', home)

    return (
        <div>
     hola mundo
        </div>
    )
}

export default ListaProductos