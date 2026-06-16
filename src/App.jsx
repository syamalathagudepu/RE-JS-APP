import { Component } from "react"

import Header from "./components/Header";

class App extends Component {

  
   render () {

    const user = {
    name : "Syama",
    email : "syama@123.com"
  }
  return (
    <>
    <Header 
    user={user}/>
    </>
  )
}
}

export default App;