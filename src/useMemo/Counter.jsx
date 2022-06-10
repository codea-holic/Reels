import React from 'react'
import { useMemo } from 'react';
function Counter() {
    const [count, setCount] = React.useState(0);
    const [count1, setCount1] = React.useState(0);

    const increment = () => (setCount((count) => {
        return count + 1;
    }));

    const isEven = useMemo(() => {
        console.log(count);
        let i = 0;
        while (i < 900000000) i++;

        return count % 2 === 0;
    }, [count]);

    const increment1 = () => (setCount1((count1) => {
        return count1 + 1;
    }));

    return (
        <>
            <div>Counter</div>
            <button onClick={increment}>Count</button>
            <span> {count} {isEven ? "Even" : "Odd"}</span>
            <br></br>
            <button onClick={increment1}>Count</button>
            <span> {count1} </span>
        </>
    )
}

export default Counter;