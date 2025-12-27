import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTask] = useState(["Sample Task 1", "Sample Task 2"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {// to show changes as user types in the input box
    setNewTask(event.target.value);
  }


  function addTask() {
    // to ensure user doesnt enter empty i/p
    if (newTask.trim() != "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i != index);
    setTask(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  return (
    <>
      <div className="container flex flex-col text-center mt-14 border-2 border-solid border-gray-900 max-w-md m-auto  bg-red-400 rounded-full py-10 ">
        <h1 className="heading text-4xl font-bold mb-5">To-Do-List</h1>
        <div>
          <input
            className="ip p-4"
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
          ></input>
          <button
            className="btn bg-green-600 text-3xl rounded-lg ml-3 mt-2 p-2"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <ul className="ul m-5">
          {" "}
          {tasks.map((task, index) => (
            <li
              className=" list font-bold m-3 text-2xl text-amber-800"
              key={index}
            >
              {task}
              <button
                className="btnd m-2 bg-yellow-300 rounded-md"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="btnu m-2 bg-slate-300 rounded-md"
                onClick={() => moveTaskUp(index)}
              >
                Up
              </button>
              <button
                className="btndo m-2 bg-lime-200 rounded-md"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ToDoList;
