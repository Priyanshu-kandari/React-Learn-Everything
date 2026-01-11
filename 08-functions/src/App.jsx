
import './App.css'

function App() {

  const btnClicked  = (val) => {
    return( console.log("having " + val + " when clicked"))
  }
  

  return (
    <>
      <input type='text' onClick={(e)=>{
        btnClicked(e.target.value)
      }}/>
    </>
  )
}

export default App
