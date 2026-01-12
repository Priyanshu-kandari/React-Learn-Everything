import { useState } from "react"

const App = () => {

  const [num,setNum] = useState(0)

  return(
    <>
    <div className="num">
      <h1>{num}</h1>
    </div>
    <div className="button">
      <button onClick={
      ()=>{
        setNum(prev => prev + 1)
      }
    }>INCREASE</button>
    <button onClick={
      ()=>{
        setNum(prev => prev = 0)
      }
    }>RESET</button>
    <button onClick={
      ()=>{
        setNum(prev => prev - 1)
      }
    }>DECREASE</button>
    </div>
    </>
  )
}

export default App