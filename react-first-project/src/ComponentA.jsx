// Props can be used to pass data from ComponentA to B, C, and D,
// but passing props through many intermediate components
// (prop drilling) becomes tedious and hard to maintain.
//
// React Context solves this by allowing data to be shared
// across multiple levels of components without passing props manually.
//
// useContext() is a React Hook that lets any component
// read values from a Context object, as long as it is wrapped
// inside the corresponding Provider.

// --------------------
// CREATE CONTEXT
// --------------------

// 1. createContext() creates a Context object
// 2. This context will hold the shared data (user in this case)
// 3. It must be created OUTSIDE the component so it can be exported
//    and used by consumer components

import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

// --------------------
// PROVIDER COMPONENT
// --------------------

// ComponentA acts as the Provider component
// It owns the shared state and supplies it to all child components
// wrapped inside <UserContext.Provider>

function ComponentA() {
  // State to store shared data
  const [user, setUser] = useState("BroCode");

  return (
    <div className="border-2 border-black p-6 w-fit">
      <h1 className="text-xl font-bold">ComponentA</h1>
      <h2 className="mb-4">Hello {user}</h2>

      {/* 
        UserContext.Provider makes the 'user' value available
        to all nested components (B → C → D),
        without passing it as props
      */}
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
