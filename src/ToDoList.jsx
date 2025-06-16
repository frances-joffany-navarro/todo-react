import { useState } from "react";

function TaskItem({ task }) {
  return (
    <li key={task.id}>
      {task.task}
      <span className="task-actions">
        <button>Delete</button>
        <button>Edit</button>
      </span>

    </li>
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
        
        <span className="task-actions"><button>Add Task</button></span>
      </form>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}