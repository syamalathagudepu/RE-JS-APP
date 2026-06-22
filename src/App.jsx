import {useReducer} from 'react'

const App = () => {

const reducer = (state, action) => {
   
  if (action.type === "LIKE") {
      return state + 1;
} else if (action.type == "DISLIKE") {
  return state - 1;
} else if (action.type == "RESET") {
  return 0;
}

return state;
}

  let [likes, setLikes] = useReducer(reducer , 0);
  
  const handleLike = () => {
        setLikes({type : "LIKE"});
  }
  const handleDislike = () => {
        setLikes({type : "DISLIKE"});
  }

  const handleReset = () => {
    setLikes ({type : "RESET"});
  }

  return (
    <div>
      <h1>Likes:{likes}</h1>
      <button onClick={handleLike}>Like</button> &nbsp;
      <button onClick={handleDislike}>Dislike</button> &nbsp;
      <button onClick={handleReset}>Reset</button>
       </div>
  )
}

export default App;