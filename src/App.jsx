import { useEffect,useState } from "react";

const App = () => {

  const [likes,setLikes] = useState(0);


useEffect(() => {
console.log("component is mounted/updated");
});

const handleLike = () => {
    setLikes(likes+1);
}

  return (
    
    <>
    <h1>Likes : {likes}</h1>
    <button onClick={handleLike}>Like</button>
    </>

  )
}

export default App;