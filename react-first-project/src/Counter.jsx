import react, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="container flex-col text-center items-center h-auto m-auto mt-72 border-2 bpx-4 rounded-lg p-10 w-1/3  mb-3">
        <p className="display text-8xl text-black">Count:{count}</p>
        <button
          className="dec rounded-3xl bg-red-500 p-4 m-3"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className=" inc rounded-3xl bg-green-500 p-4 m-3"
          onClick={increment}
        >
          Increment
        </button>

        <button
          className="reset rounded-3xl bg-blue-500 p-4 m-3"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
export default Counter;
