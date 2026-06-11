import StudentCard from './components/StudentCard';

function App() {
  const studentName = "Arun";
  const course = "React JS";
  const age = 21;
  const city = "Coimbatore";

  return <StudentCard
    studentName={studentName}
    course={course}
    age={age}
    city={ city }
  />

}
export default App;


// import { useState } from "react";

// const [reactions, setReactions]=useState({
//   likes: 0,
//   dislikes: 0,
//   history: []
// });

//   const handleLike = () => {
//     setLikes(likes + 1);
//     setHistory([
//       ...history,
//       "L"
//     ]);

//   }
//   const handleDisLike = () => {
//     setDisLikes(dislikes + 1);
//      setHistory([
//       ...history,
//       "D"
//     ]);
//   }

//   console.log(history);

//   return (
//     <>
      
//     <button onClick={handleLike}>Like {likes}</button> &nbsp;
//     <button onClick={handleDisLike}>DisLike{dislikes}</button>
//     <p> History of Clicks: {history} </p>
//     </>
//   )
// }

// export default App;

