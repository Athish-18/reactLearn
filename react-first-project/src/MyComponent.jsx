import React, { useState } from "react";

function MyComponent() {
  // State object to store car details
  const [car, setCar] = useState({
    year: 2025,
    make: "Renault",
    model: "SUV",
  });

  // Update only the 'year' property
  // Uses updater function to safely access previous state
  const handleYear = (event) => {
    setCar((c) => ({
      ...c, // spread previous state
      year: event.target.value, // update year
    }));
  };

  // Update only the 'make' property
  const handleMake = (event) => {
    setCar((c) => ({
      ...c, // spread previous state
      make: event.target.value, // update make
    }));
  };

  // Update only the 'model' property
  const handleModel = (event) => {
    setCar((c) => ({
      ...c, // spread previous state
      model: event.target.value, // update model
    }));
  };

  return (
    <>
      {/* Display car details */}
      <p>
        Your Fav Car is {car.make} {car.model} {car.year}
      </p>

      {/* Input to update year */}
      <input type="number" value={car.year} onChange={handleYear} />

      {/* Input to update make */}
      <input type="text" value={car.make} onChange={handleMake} />

      {/* Input to update model */}
      <input type="text" value={car.model} onChange={handleModel} />
    </>
  );
}

export default MyComponent;
