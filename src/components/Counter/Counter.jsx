import React, {useState} from 'react'


const Counter = (props) => { 
    console.log(props)
    const [counter, setCounter] = useState (props.valorInicial)
    const [contador, setContador] = useState ("Mi contador")

    const incrementar = () => {        
        setCounter(counter + props.incremento)
    }

    const reducir = () => {
        setCounter(counter - 1)
    }

    setTimeout(() => {
        setContador("Este es tu contador de verdad de la buena")
    }, 3000);

     return (
        <div>
            <h2>{contador}</h2>
            <span>{counter}</span>
            <br />
            <button onClick={incrementar}>Incrementa!</button>
            <br />
            <button onClick={reducir}>Reduce!</button>
        </div>
    )
}

export default Counter