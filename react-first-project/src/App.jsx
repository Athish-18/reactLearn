/*
These are props. They are read-only properties that are shared between components. A parent component can send data to a child component., default props enable to take those values when not sent , proptypes ensure u pass in crct datatype*/ 
import Student from "./Student.jsx"
function App() {
  return (
    <>
      <Student name="john" age={30} isStudent={true}></Student>
      <Student name="cena" age={30} isStudent={true}></Student>
      <Student name="seth" age={30} isStudent={true}></Student>
      <Student name="30" age={30} isStudent={true}></Student>
      <Student ></Student>
    </>
  );
}
export default App;
