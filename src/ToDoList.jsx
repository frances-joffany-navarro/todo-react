import { useState } from "react";

function TaskItem({ task, handleDelete, handleEdit }) {
  return (
    <li key={task.id}>
      {task.task}
      <span className="task-actions">
        <button onClick={() => handleDelete(task.id)}>Delete</button>
        <button onClick={() => handleEdit(task.id)}>Edit</button>
      </span>
    </li>
  );
}

function AddingTaskInput({ value, handleInputChange, addTask }) {
  return (
    <form>
      <input type="text" id="taskInput" name="inputTask" placeholder="Add a new task" value={value} onChange={(e) => handleInputChange(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
    </form>
  );
}

export default function ToDoList() {

  const [tasks, setTasks] = useState([]);

  const taskList = tasks.map((task) => (
    TaskItem({ task, handleDelete, handleEdit })
  ));

  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    const newTaskItem = { id: Date.now(), task: newTask };
    setTasks([...tasks, newTaskItem]);
    setNewTask("");
  }

  function handleEdit(taskId) {
    const taskToEdit = tasks.find(task => task.id === taskId);
    if (taskToEdit) {
      setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, task: prompt("Edit task:", task.task) || task.task } : task
      ));
    }
    return () => {
    }
  }

  function handleDelete(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <AddingTaskInput value={newTask} handleInputChange={setNewTask} addTask={addTask} />
      <h2>Tasks</h2>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}