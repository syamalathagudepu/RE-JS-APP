import Header from "./components/studentCard";

function App() {

  const studentName = "Arun";
  const course = "React JS";
  const age = 21;
  const city = "Coimbatore";

return
    <Header
    studentName={studentName}
    course={course}
    age={age}
    city={city}/>
  

}

export default App;