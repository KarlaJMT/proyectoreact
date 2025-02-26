import React from 'react'
import { useState } from 'react';

export const KarlaMunoz = () => {
  const edad = 19;
  let nacionalidad = 'Mexicana';
  const [nombre, setNombre] = useState('Karla');
  // Si no se importó el Use State, se pone React.useState, en cambio, 
  // si ya se importó, se pone como está en la línea de arriba (sin el React.).
  const [dato1, setDato1] = useState(0);
  const [dato2, setDato2] = useState(0);
  const [res, setRes] = useState(0);

  const medisteclick = () => {
    console.log(nombre)
  }

  // Estructura para cambiar una función.
  const handchangenombre = (nombre) => {
    setNombre(nombre);
  }

  const medisteclick1 = () => {
    console.log(dato1);
  }

  const medisteclick2 = () => {
    console.log(dato2);
  }

  const medisteclick3 = () => {
    console.log(res);
  }

  const handchangedato1 = (e) => {
    setDato1(Number(e.target.value));
  }

  const handchangedato2 = (e) => {
    setDato2(Number(e.target.value));
  }

  const calcularSuma = () => {
    setRes(dato1 + dato2);
  }

  return (
    <div>
      <div>
        <h1>Soy {nombre}</h1>
        {/* Usar los corchetes "{}" para colocar la variable en un texto. */}
        <p>Tengo {edad} años y soy {nacionalidad}, estudio la carrera de Tecnologías de la información
          Área Desarrollo de Software en la Universidad Tecnológica de la Riviera Maya.
          Desde pequeña he estado pegada a las computadoras, por lo que
          casi de inmediato supe esta era mi carrera, aunque mi primera opción fue diseño gráfico,
          sin embargo, decidí irme por esta porque: 1. Me gusta la carrera, y 2. Se gana buen dinero.
          Quiero poder saber varios lenguajes de programación, aunque aún no estoy segura de cuáles
          en específico, sólo sé que no me quiero conformar coon unos pocos, además de que si quiero conseguir
          un buen puesto, es mejor saber más. </p>

        <p>
          Dato 1: {dato1} <br /> 
          Dato 2: {dato2} <br />
          Respuesta: {res}
        </p>

        {/*  */}
        <input onChange={handchangedato1} type='number' placeholder='Dato 1' />
        <button onClick={medisteclick1}>Mostrar Dato 1</button> <br />

        <input onChange={handchangedato2} type='number' placeholder='Dato 2' />
        <button onClick={medisteclick2}>Mostrar Dato 2</button> <br />

        <button onClick={calcularSuma}>Calcular Suma</button>

        <input onChange={e => handchangenombre(e.target.value)} name='nombre' type='text' placeholder='Nombre' />
        <button onClick={() => medisteclick()}>Nyehehe.</button>
      </div>

      <div>

      </div>
    </div>
  )
}
