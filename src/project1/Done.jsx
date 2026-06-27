const Done = ({ tasks }) => {
  return (

    <>
       <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-600 bg-red-200">Done</h2>
          {tasks.done.map((task, index) => (
            <div key={index} className="bg-white p-3 rounded shadow mb-3">
              {task}
        
              </div>
              ))}

        </div>
    </>
          
)
}

export default Done;