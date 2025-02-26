import React from 'react'
import { Typography } from '@mui/material'

const materia1 = 7;
const materia2 = 9;
const res = (materia1 + materia2) / 2;

export const ContenedorReprobado = () => {

    if (res < 8) {
        return (
            <div>
                <Typography variant='h3' color='error'>Reprobado</Typography>
                <h4>Promedio: {res}</h4>
            </div>
        )
    }
    return (
        <div>ContenedorReprobado</div>
    )
}
