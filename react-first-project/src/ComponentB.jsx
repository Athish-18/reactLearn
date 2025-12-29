import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="border-2 border-black p-5 ml-6">
      <h1 className="text-lg font-semibold">ComponentB</h1>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
