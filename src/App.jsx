import Menulist from './components/Menulist'

const App = () => {

const menulist = [
  'Home',
  'Register',
  'Login',
];

const headerStyle = {color:'purple',
              backgroundColor:'greenyellow',
  padding: '4px',
        textAlign: 'center'}

  return (
    <>
  
    <h1 style={headerStyle}>Guvi - React</h1>
    <ul>
      {
      menulist.map((value, index)=>{
        return <Menulist
        key= {index}
        value= {value}
        /> 
      })
    }
    </ul>
    
    </>
    
  )
}

export default App;