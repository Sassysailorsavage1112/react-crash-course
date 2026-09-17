import React, { useState } from 'react';


function Counter() {
    const [count, setCounter] = useState(0);

    function increment() {
        setCount(count + 1);
        console.log('incrementCounter()');
    }

    function decrement() {
        setCount(count - 1);
        console.log('decrementCounter()');
    }
    return (
        <div>
<button onClick={decrement}>-</button>
{count}
<button onClick={increment}>+</button>
</div>
    )
}

export default Counter