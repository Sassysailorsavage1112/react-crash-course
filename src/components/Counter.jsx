import React, { useState } from 'react';


function Counter() {
    const [count, setCounter] = useState(0);
    function increment() {
        setCounter(count + 1);
        console.log('incrementCounter()');
    }

    function decrementCounter() {
        setCounter(count - 1);
        console.log('decrementCounter()');
    }
    return (
        <div>
<button onClick={decrementCounter}>-</button>
{count}
<button onClick={increment}>+</button>
</div>
    )
}

export default Counter