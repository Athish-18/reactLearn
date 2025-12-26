import React, { useState } from "react";

function MyComponent() {
  // State to store list of foods
  const [foods, setFoods] = useState(["Pizza", "Burger", "Hotdog"]);

  // Function to add a new food item
  const handleAddFood = () => {
    // Get input value
    const foodItem = document.getElementById("fav").value;

   

    // Update state using updater function
    setFoods((f) => [...f, foodItem]);

    // Clear input field after adding
    document.getElementById("fav").value = "";
  };

  return (
    <>
      <h1>My Fav Foods</h1>

      <ul>
        {/* map() must RETURN JSX */}
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      {/* Input field */}
      <input type="text" id="fav" placeholder="Type favorite food" />

      {/* Button to add food */}
      <button onClick={handleAddFood}>Add food</button>
    </>
  );
}

export default MyComponent;
