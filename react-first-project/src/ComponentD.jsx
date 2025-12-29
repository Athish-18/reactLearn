import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div className="border-2 border-black p-3 ml-6">
      <h1 className="font-semibold">ComponentD</h1>
      <h2>Bye {user}</h2>
    </div>
  );
}

export default ComponentD;
