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

import Child from "./components/Child";

const App = () => {

function callback(data) {
  // console.log("Callback applied!");
  // console.log(data);
}

  return (
    <>
     <Child callback={callback}/>
     </>
  )
}

export default App;