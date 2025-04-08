import React, {useState} from "react";

//useState : is a Hook that lets you add React state 
// to function components. 
// It returns an array with two elements: 
// the current state value and a function that lets you 
// update it. 
// You can use array destructuring to assign 
// names to these two elements.

//useState(0) : initializes the state variable count to 0. The first element of the array is the current state value, and the second element is a function that lets you update it.

function MyComponent(){

    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <>
            <div className="class-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={incrementCount} >Increment</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={decrementCounter}>Decrement</button>
            </div>
        </>
    )

}

export default MyComponent;