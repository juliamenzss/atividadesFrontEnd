import React from 'react'

const EstouComSono = (props) => {
  return (
    <div>
      {props.comSono ? <h1>Estou com Sono</h1> : <h1>Bora estudar mais um pouco</h1>}
    </div>
  )
}

export default EstouComSono
