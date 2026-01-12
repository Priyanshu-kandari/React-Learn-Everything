import React from 'react'

const App = () => {

    const submitHandler = () => {
        console.log("submitted")
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            submitHandler()
        }}>
            <input type="text" placeholder='enter your name'/>
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}

export default App