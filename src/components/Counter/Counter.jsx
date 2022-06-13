import React, {useState} from 'react'


const Counter = (props) => {
   
    const [counter, setCounter] = useState (props.valorInicial)   

    const incrementar = () => {        
        setCounter(counter + props.incremento)
    }

    const reducir = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h2>Mi contador</h2>
            <span>{counter}</span>
            <br />
            <button onClick={incrementar}>Incrementa!</button>
            <br />
            <button onClick={reducir}>Reduce!</button>
        </div>
    )
}

export default Counter