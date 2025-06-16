export function AddingTaskInput(value, handleInputChange) {
  return (
    <form>
      <input type="text" id="taskInput" name="inputTask" placeholder="Add a new task" value={value} onChange={(e) => handleInputChange(e.target.value)} />
      <button>Add Task</button>
    </form>
  );
}