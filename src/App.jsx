// import React from 'react'

const App = () => {

const menulist = [
  'Home',
  'Register',
  'Login',
];

  return (
    <>
    
    <h1>Guvi - React</h1>
    <ul>
      {
      menulist.map((value, index)=>{
        return <li key= {index}><a href="#">{value}</a></li> 
      })
    }
    </ul>
    
    </>
    
  )
}

export default App;