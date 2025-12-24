import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className="div p-4 border-2 m-4 mb-2">
      <p className="name text-2xl font-bold">Name: {props.name}</p>
      <p className="name text-2xl font-bold">Age: {props.age}</p>
      <p className="name text-2xl font-bold">
        Student: {props.isStudent ? "yes" : "no"}
      </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "unknown",
  age: 0,
  isStudent: false,
};

export default Student;
