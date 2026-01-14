import { useEffect, useState } from "react"
import Left from "./Left"
import Right from "./Right"

const App = () => {

  const[notes,setNotes] = useState(()=>{
    return JSON.parse(localStorage.getItem("Notes")) || []
  })

  useEffect(()=>{
    localStorage.setItem("Notes",JSON.stringify(notes))
  },[notes])

  const addNote = (note) =>{
    setNotes([note,...notes])
  }

  const deleteNote = (id) => {
  setNotes(prevNotes =>
    prevNotes.filter(note => note.id !== id)
  )
}



  return (
    <div className="transition-all duration-200 ease-in-out flex lg:flex-row flex-col gap-12 min-h-screen lg:h-screen bg-gray-900 text-white lg:p-10 p-5">
      <Left addNote={addNote}/>
      <Right deleteNote={deleteNote} notes={notes} />
    </div>
  )
}

export default App