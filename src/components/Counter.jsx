function Counter() {
   function increment() { 
    console.log('incrementCounter()')

   }

    function decrement() {
    console.log('decrementCounter()')
    }
    return (
        <div>
<button onClick={decrement}>-</button>
{0}
<button onClick={increment}>+</button>
</div>
    )
}

export default Counter