import React, { useState } from "react";
function MyComponent() {
  const [cars, setCar] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carModel, setModel] = useState("");

  function addCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCar((c) => [...c, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }

  function addYear(event) {
    setYear(event.target.value);
  }

  function addMake(event) {
    setMake(event.target.value);
  }

  function addModel(event) {
    setModel(event.target.value);
  }

  function handleRemove(index) {
    setCar((c) => c.filter((_, i) => i !== index)); // if i click on list item at index i, remove that item
  }

  return (
    <>
      <h1>List of Car objects</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onCClick={() => handleRemove(index)}>
            {" "}
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" placeholder="2025" onChange={addYear}></input>
      <input type="text" placeholder="Renault" onChange={addMake}></input>
      <input type="text" placeholder="Hatchback" onChange={addModel}></input>
      <button onClick={addCar}> Add Car</button>
    </>
  );
}
export default MyComponent;
