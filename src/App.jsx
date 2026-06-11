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

import React from "react";

class App extends React.Component {
  render() {
    let name = "Syama";
    let age = 29;

    return (
      <>
      <h1>Greetings!</h1>
      <p>
        Hello {name}!
        Your age is {age }
      </p>
      </>
    )
  }
  }

  export default App;