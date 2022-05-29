import React, { useState } from 'react'

function UseStateExample() {
    const [count, setCount] = useState(0);

    const Inc = () => {
        setCount(count + 1);
    }

    const Dec = () => {
        setCount(count - 1);
    }

    const IncByFive = () => {
        
        // Why this for does not increment this value by 5;
        for(let i = 1; i <= 5; i++){
            setCount(count + 1);
        }

    }

    return (
        <>
            <div>UseStateExample</div>
            <button onClick={Inc}>Increment</button>
            <span>  {count}  </span>
            <button onClick={Dec}>Decrement</button>
            <br></br>
            <button onClick={IncByFive}>Plus Five</button>
        </>
    )
}

export default UseStateExample;