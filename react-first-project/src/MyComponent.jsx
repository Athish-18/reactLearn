// useEffect() - React Hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts---when u create it for the first time
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})            // Runs after every re-render
// 2. useEffect(() => {}, [])        // Runs only on mount
// 3. useEffect(() => {}, [value])   // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import { useState, useEffect } from "react";
function MyComponent() {
  //Use Effect example 1: Run on every re-render
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`; //updates the title of the document every time the component re-renders ie count changes

    //useEffect(() => {}, [])       // Runs only on mount --- Update document title only when component mounts ie only once at the start
    // useEffect(()=>{
    //   document.title=`Count is ${count}`;
    // },[]);
    

    // useEffect(()=>{
    //   document.title=`Count is${count} times`;
    // },[count]);        // Changes title only when count is updated and is mounted ie basically everytime count changes.


  const [count, setCount] = useState(0);
  setCount((c) => c + 1);
  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={addCount}>Increase Count</button>
    </>
  );
}
export default MyComponent;
