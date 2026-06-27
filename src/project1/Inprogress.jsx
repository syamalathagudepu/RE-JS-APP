

const Inprogress = ({ tasks }) => {

  return (

    <>
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-yellow-600 bg-blue-300">In Progress</h2>
          {tasks.inProgress.map((task, index) => (
            <div key={index} className="bg-white p-3 rounded shadow mb-3">
                {task}
            </div>
          ))}
        </div>
    </>
    
  )
}

export default Inprogress

