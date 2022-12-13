import { useState } from 'react';

export default function Score(props) {
    let [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 50)
    }

    const handleDecrease = () => {
        setCount(count - 50)
    }

    const handleReset = () => {
        setCount(count = 0)
    }

    return (
        <>
            <span>Score: {count}</span>
            <br />
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}