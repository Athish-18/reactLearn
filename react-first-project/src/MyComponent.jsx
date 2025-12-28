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
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // window.addEventListener("resize",handleResize);
  // console.log("event listener added"); many event listeners added to create only 1 -- event listeners use Useffect

  // useEffect(()=>{
  //   window.addEventListener("resize", handleResize);
  //   console.log("event listener added");

  // },[]) /// now only once event listener created ie at the time of mount (creation of component)

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed"); /// to perform some cleanup
    };
  }, []);

  useEffect(() => {
    document.title = `Size:${width} ${height}`;
  });

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>Window Width : {width}px</p>
      <p>Window Height : {height}px</p>
    </>
  );
}
export default MyComponent;
