import React, { useState } from "react";
import Todo from "./project1/Todo";
import Inprogress from "./project1/Inprogress";
import Done from "./project1/Done";
import Newtask from "./project1/Newtask";

function App() {
  const [tasks, setTasks] = useState({
    todo: ["Design Login Page"],
    inProgress: ["API Integration"],
    done: ["Setup Project Structure"],
  });

  const [newTask, setNewTask] = useState("");

  // Function to add a new task to "To Do"
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask],
    });
    setNewTask("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Kanban Board Tasks</h1>

        {/* NewTask */}
        <Newtask
         newTask={newTask} 
        setNewTask={setNewTask} 
        addTask={addTask}/>


       {/* Kanban Columns */}

      <div className="grid md:grid-cols-3 gap-6">
         {/*To Do  */}
      
    
       <Todo tasks={tasks}/>

        {/* In Progress  */}
        <Inprogress tasks={tasks}/>

        {/* Done  */}
        <Done tasks={tasks}/>
         
           
      </div>
    </div>
  );
}

export default App;
