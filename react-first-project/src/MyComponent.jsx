// onChange event handler
// It is primarily used with form elements such as:
// input, textarea, select, radio buttons, and checkboxes

// onChange triggers a function every time the value of the form element changes
// This allows us to capture user input immediately

// It is commonly used in React to:
// - Update component state
// - Keep form elements controlled
// - Synchronize UI with application data

import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleNum = (e) => {
    setNumber(Number(e.target.value));
  };

  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleChange} />
      <p>Name: {name}</p>

      <input type="number" value={number} onChange={handleNum} />
      <p>Number: {number}</p>

      <textarea
        value={comment}
        placeholder="enter comments"
        onChange={handleComment}
      >
        Enter items
      </textarea>
      <p>Comment: {comment}</p>
    </>
  );
}

export default MyComponent;
