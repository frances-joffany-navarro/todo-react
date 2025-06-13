import { useState } from "react";

export default function ToDoList() {
  const [newTask, setNewTask] = useState('F');

  const tasks = [
    { id: 1, task: 'Learn React' },
    { id: 2, task: 'Build a To-Do List App' },
    { id: 3, task: 'Share with friends' }
  ];

  const taskList = tasks.map((task) => (
    TaskItem({ task })
  ));

  return (
    <div>
      <h1>To-Do List</h1>
      <AddingTaskBar value={newTask} />
      <ul>
        {taskList}
      </ul>
    </div>
  );
}

function AddingTaskBar(value) {
  return (
    <div>
      <input type="text" name="inputTask" placeholder="Add a new task" value={value}/>
      <button>Add Task</button>
    </div>
  );
}

function TaskItem({ task }) {
  return (
    <li key={task.id}>
      {task.task}
      <button>Delete</button>
      <button>Edit</button>
    </li>
  );
}

