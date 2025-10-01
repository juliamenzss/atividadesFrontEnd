import React, { useState } from "react";

const HookContador = () => {
    const [contador, setContador] = useState(0);

    var incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

  return (
    <div>
      <h1>Contador com useState</h1>
      <button onClick={incrementar}>Incrementar contador</button>
      <h1>O contador esta em: {contador}</h1>

      <h1>Contador com useState</h1>
      <button onClick={decrementar}>Decrementar contador</button>
      <h1>O contador esta em: {contador}</h1>
    </div>
  )
}

export default HookContador
