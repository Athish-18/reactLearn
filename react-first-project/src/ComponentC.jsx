import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div className="border-2 border-black p-4 ml-6">
      <h1 className="text-base font-semibold">ComponentC</h1>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
