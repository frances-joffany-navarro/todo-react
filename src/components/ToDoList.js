export default function ToDoList() {
  const tasks = [
    'Learn React',
    'Build a To-Do List App',
    'Share with friends'
  ];

  return (
    <div>
      <h1>To-Do List</h1>
      <AddingTaskBar />
      <></>
      <ul>
        <TaskItem task={tasks[0]} />
        <TaskItem task={tasks[1]} />
        <TaskItem task={tasks[2]} />
      </ul>
    </div>
  );
}

function AddingTaskBar() {
  return (
    <div>
      <input type="text" placeholder="Add a new task" />
      <button>Add Task</button>
    </div>
  );
}

function TaskItem({ task }) {
  return (
    <li>
      {task}
      <button>Delete</button>
      <button>Edit</button>
    </li>
  );
}

