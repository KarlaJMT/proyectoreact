import React from 'react'
import { useState } from 'react'
import { ComponenteHijo } from './ComponenteHijo'

export const ComponentePadre = () => {
    const [nombre, setNombre]=useState('Karla');
    const [conteo, setConteo]=useState(0);
    const persona = {
        nombre: "Karla",
        edad: 19,
        nacionalidad: "MX"

    }

    const [buscador, setBuscador] = useState("");

    const sumandonumero = () => {
        setConteo(conteo + 1);
    }

    const restarnumero = () => {
        setConteo(conteo - 1);
    }
  return (
    <div>
        <h1>
            Este es un componente padre.
        </h1>
        Este es el Nombre: {nombre} 
        <h3>CONTEO: {conteo} </h3>
        <button onClick={sumandonumero}>Click para sumar.</button>
        <h3>Ingresa el dato a buscar:</h3>
        <input onChange={(e) => setBuscador(e.target.value)}
        name = "valor1"
        type = "text"
        placeholder = "dato"
        />
        <br />
        
        <ComponenteHijo
        name={nombre}
        persona={persona.edad}
        suma={sumandonumero}
        resta={restarnumero}
        buscador={buscador}
        />
    </div>
  )
}
