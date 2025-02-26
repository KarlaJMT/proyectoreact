import React from 'react'

export const ComponenteHijo = (props) => {
  return (
    <div>
        <hr />
        <h2>Tu nombre es: {props.name}</h2>
        <h2>Tu edad es: {props.persona}</h2>
        <button onClick={props.resta}>Click para restar.</button>

        <h2>El valor buscado fue {props.buscador}</h2>
    </div>
  )
}
 