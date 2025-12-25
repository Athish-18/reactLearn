/*
A React Hook is a special function that allows functional components
to use React features without writing class components.

This change was introduced in React version 16.8.

Before Hooks:
- React features like state and lifecycle methods were available
  only in class components.

After Hooks:
- We no longer need to write class components.
- We can write function-based components and still use React features
  by using Hooks.

React Hooks are special functions.
- By convention, if a function name starts with "use",
  it is likely a React Hook.

Commonly used React Hooks include:
- useState
- useEffect
- useContext
- useReducer
- useCallback
- and others

Among these, useState is the most widely used Hook.

useState:
- useState is a React Hook that allows us to create state in
  functional components.
- It provides a state variable and a setter function.

Important concept:
- State variables are special variables.
- When a state variable changes, React updates the Virtual DOM
  and re-renders the component.
- Normal JavaScript variables do NOT trigger re-rendering.

Using useState:
- We are not just creating a variable.
- We are creating a stateful variable (state).
- React tracks this variable internally.

When we use useState, React returns:
1. A state variable (current value)
2. A setter function to update that variable

Updating state using the setter function:
- Triggers a re-render
- Updates the Virtual DOM
- Reflects the change in the UI
*/

import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("guest");
  const [age, setAge] = useState(0);

  const updateAge = () => {
    setAge(20);
    //setAge(age+1);
  };

  const handleClick = () => {
    setName("Spongebob");
  };

  const [Employed_Status, setEmployedStatus] = useState(false);
  const toggle = () => {
    setEmployedStatus(!Employed_Status);
  };

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={handleClick}>Click here for name</button>

      <p>Age:{age}</p>
      <button onClick={updateAge}>Set Age</button>

      <p>Employed Status: {Employed_Status ? "Employed" : "Unemployed"}</p>
      <button onClick={toggle}>Toggle Employed status</button>
    </>
  );
}

export default MyComponent;
