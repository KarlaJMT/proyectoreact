import React from 'react'
import { ContenedorAprobado } from './alumnosprom/ContenedorAprobado';
import { ContenedorReprobado } from './alumnosprom/ContenedorReprobado';

export const AlumnoPromedio = () => {

    const materia1 = 7;
    const materia2 = 9;
    const res = (materia1 + materia2) / 2;

    if (res >= 8) {
        return(
            <div>
                <ContenedorAprobado/>
            </div>
        )
    } else {
        return(
            <div>
                <ContenedorReprobado/>
            </div>
        )
    }
    
  return (
    <div>AlumnoPromedio</div>
  )
}
