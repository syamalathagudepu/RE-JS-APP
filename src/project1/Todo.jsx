const Todo = ({ tasks }) => {

  return (

  <>

  <div className="bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-600 bg-yellow-200">
        To Do
      </h2>
      {tasks.todo.map((task, index) => (
        <div key={index} className="bg-white p-3 rounded shadow mb-3">
          {task}
        </div>
      ))}
    </div>
      </>
   
  );
};

export default Todo;
