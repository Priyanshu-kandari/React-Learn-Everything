import { useState } from "react"


const App = () => {

  const [Title, setTitle] = useState("")

    const submitHandler = () => {
        console.log("submitted")
    }
  return (
    <div>
        <form onSubmit={()=>{
            submitHandler()
            console.log("form submited by" , Title)
            setTitle("")
        }}>
            <input type="text" placeholder='enter your name' onChange={(e)=>{
              setTitle(e.target.value)
            }} value={Title}/>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}

export default App