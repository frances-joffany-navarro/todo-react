import { useState } from "react";

export default function ToDoList() {
  const tasks = [
    { id: 1, task: 'Learn React' },
    { id: 2, task: 'Build a To-Do List App' },
    { id: 3, task: 'Share with friends' }
  ];

  const taskList = tasks.map((task) => (
    TaskItem({ task })
  ));

  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <h1>To-Do List</h1>
      <form>
        <input type="text" id="taskInput" name="inputTask" placeholder="Add a new task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button>Add Task</button>
      </form>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}

/* function AddingTaskInput(value, handleInputChange) {
  return (
    <form>
      <input type="text" id="taskInput" name="inputTask" placeholder="Add a new task" value={value} onChange={(e) => handleInputChange(e.target.value)} />
      <button>Add Task</button>
    </form>
  );
} */

function TaskItem({ task }) {
  return (
    <li key={task.id}>
      {task.task}
      <button>Delete</button>
      <button>Edit</button>
    </li>
  );
}

