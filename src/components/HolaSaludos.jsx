import React from 'react'
import { useState } from 'react';

export const HolaSaludos = () => {
    const [nombre, setNombre]=useState('Karla');
  return (
    <div>
        <p>
            Hola Mundo, soy {nombre}
            </p>
    </div>
  )
}