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

const App = () => {

let likes = 0;

const handleLike = () =>{
  likes++
  console.log(likes);
}

  return (
    
    <>
     <h1>Likes : {likes}</h1>
     <button onClick={handleLike}>Like</button>
    
    </>
  )
}

export default App