import React from 'react'
import { useCallback } from 'react';
import { useMemo } from 'react';
import Counter from './Counter';

function ParentCounter() {
    const [count, setCount] = React.useState(0);
    const [count1, setCount1] = React.useState(0);
    console.log("Parent Rendered");
    const increment = () => (setCount((count) => {
        return count + 1;
    }));

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 900000000) i++;

        return count % 2 === 0;
    }, [count]);

    const increment1 = () => (setCount1((count1) => {
        return count1 + 1;
    }));

    // I got an warning of exhaustive-deps when we pass parameter
    // of count in setCount function (means setCount(count));

    const incrementChild = useCallback(() => {
        setCount(() => {
            return (count + 1);
        })
    }, [count]);

    // useCallBack pure function ko hi yaad kr leta hai -> jab bhi ham function call karte hai
    // tab wahi function ko excute kr deta hai...
    /**
     * useMemo -> jab variable ko memoize krna ho
     * useCallBack -> jab kisi function ko call krna ho
     * React.memo -> jab pure component ko use krna ho
     */
    return (
        <>
            <button onClick={increment}>Count</button>
            <span> {count} {isEven ? "Even" : "Odd"}</span>
            <br></br>
            <button onClick={increment1}>Count</button>
            <span> {count1} </span>
            <Counter count={count} incrementChild={incrementChild}></Counter>
        </>
    )
}

export default ParentCounter;