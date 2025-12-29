//UseState re renders component each time value changes , Use Effect just to control that here it re renders everytime count changes , but with UseRef u can stop re rendering and make them remeber the value or store the changes of state variable number

// import React, { useState, useEffect } from "react";
// function MyComponent() {
//   const [number, setNumber] = useState(0);

//   useEffect(() => {
//     console.log("Component re rendered");
//   });

//   const handleClick = () => {
//     setNumber((number) => number + 1);
//   };

//   return (
//     <>
//       <button onClick={handleClick}> Click ME</button>
//     </>
//   );
// }
// export default MyComponent;





// useRef() is a React Hook that returns an object.
// This object contains a single property called "current".

// The "current" property can store:
// - a primitive value
// - an array
// - an object
// - a reference to an HTML DOM element

// Updating the value of ref.current does NOT cause
// the component to re-render.

// Because of this behavior, useRef is useful for:
// - Accessing and interacting with DOM elements
// - Managing focus, animations, and transitions
// - Storing mutable values like timers and intervals
// - Preserving values between renders without triggering updates

// We will use useRef in the next example
// to build a stopwatch component.



// Now with useRef ---- it provides a ref object which has a current property which u can set initially 
// only once the component is rendered
// import React, { useState, useEffect, useRef } from "react";
// function MyComponent() {
//   const [number, setNumber] = useState(0);

//   const ref = useRef(0); // ref object

//   useEffect(() => {
//     console.log("Component re rendered");
//   });

//   const handleClick = () => {
//     ref.current++;
//     console.log(ref.current);
//   };

//   return (
//     <>
//       <button onClick={handleClick}> Click ME</button>
//     </>
//   );
// }
// export default MyComponent;


// Now with HTML elements  --- here input element has a inputref object created therefore when ever u type though value changed not rendered again 
import React, { useState, useEffect, useRef } from "react";
function MyComponent() {

  const inputRef=useRef(null);

  useEffect(() => {
    console.log("Component re rendered");
  });

  const handleClick = () => {
   inputRef.current.focus(); // for focusing
  };

  return (
    <>
      <button onClick={handleClick}> Click ME</button>
      <input ref={inputRef} placeholder="type" className="ml-4"></input>
    </>
  );
}
export default MyComponent;

