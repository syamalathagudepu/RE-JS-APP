import {useState} from 'react';

const App = () => {

const [reactions, setReactions] = useState({
  likes: 0,
  dislikes: 0,
  history: []
});

const handleLike = () => {
    setReactions({
      ...reactions,
      likes: reactions.likes + 1,
      history: [
        ...reactions.history,
        'L'
      ]
    });
 }
const handleDislike = () => {
    setReactions ({
      ...reactions,
      dislikes: reactions.dislikes+1,
      history: [
        ...reactions.history,
        'D'
      ]
      
    });
}

  return (
   
    <>
    <button onClick={handleLike}>Like {reactions.likes}</button> &nbsp;
    <button onClick={handleDislike}>Dislike {reactions.dislikes}</button>
    <p>History of Clicks: {reactions.history.join(', ') }</p>
    
    </>
  )
}

export default App;