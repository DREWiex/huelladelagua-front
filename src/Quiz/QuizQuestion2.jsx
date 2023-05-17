import React, { useState } from 'react'

export const QuizQuestion2 = () => {
    //ésto se haría con un useSelector en redux, en vez de un useState, para que así se guardara al cambiar de página
    const [count, setCount] = useState(1)

    const handleCount = (ev) => {
        let newCount;
        switch (ev.target.id) { 
            case 'sumar':
                newCount = count + 1
                setCount(newCount)
                break;
            case 'restar':
                newCount = count - 1
                setCount(newCount)
                break;
        }

    }

    return (
        <>
            <h1>
                Contador: {count}
            </h1>

            <button id='sumar' onClick={handleCount}>
                sumar
            </button>
            <button id='restar' onClick={handleCount}>
                restar
            </button>
        </>

    )
}
