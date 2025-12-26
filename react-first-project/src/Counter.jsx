//update fn:
// Updater Function (Functional State Update)
// An updater function is a function passed as an argument to a state setter.
// Example: setYear(y => y + 1)

// The updater function receives the previous state value
// and returns the new updated state.

// This approach ensures safe and predictable state updates,
// especially because state updates in React are asynchronous.

// It is particularly useful when:
// - The new state depends on the previous state
// - Multiple state updates occur in sequence
// - State is updated inside callbacks, loops, or async functions

// Best practice:
// Always use updater functions when updating state
// based on the previous value to avoid stale or incorrect state.



import React ,{useState} from 'react';
//normal counter with incrememt,  here if i want to increase count by 3 times i can do by count+3 or if i do count +1 ,count+1,count+1 only once count will be updated therefore we need to pass update fn ie an arrowfn inside the setter fn
//check the other fn
// function Counter()
// { const[count,setCount]=useState(0);
//   const increment=()=>{
//   setCount(count+1); ----count not updated because set fns do not trigger an update of state and re render of fns , react
//    batches together updates for performance puropose , next state becomes current state after an update 
//  setCount(count+1);
//  setCount(count+1);------count still incremented by only 1
//   }
//   return(
//    <>
//    <p>Count:{count}</p>
//    <button onClick={increment}>Increment</button>
//    </>
//   )
// }
// export default Counter;


// with update fn the state var is updated on every increament
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(c=>c+1); // react puts updater fns in a queue , during the next render , it will call in the same order
    setCount(c=>c+1)
  };
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
export default Counter;