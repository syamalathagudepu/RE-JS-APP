
const Newtask = ({ newTask, setNewTask, addTask }) => {
  return (
    <div>
        
        {/* Add Task Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task..."
          className="border border-gray-300 rounded px-3 py-2 w-64 mr-2 bg-green-200"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>

      </div>

    </div>
  )
}

export default Newtask