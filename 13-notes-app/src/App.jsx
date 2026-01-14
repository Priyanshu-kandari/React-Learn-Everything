import { useEffect, useState } from "react"
import Left from "./Left"

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
    <div className="transition-all duration-200 ease-in-out flex lg:flex-row flex-col gap-15 min-h-screen lg:h-screen bg-gray-800 text-white lg:p-10 p-5">
      <Left addNote={addNote}/>
      <div className="lg:w-2/3 flex flex-col py-10 gap-10 border-2">
        <h1 className="self-center font-bold text-3xl">RECENT NOTES</h1>
        <div className="flex flex-wrap gap-10 justify-center h-full overflow-auto">
          {notes.map((note)=>{
            return (
              <div key={note.id} className="flex justify-between flex-col h-72 w-60 text-black rounded bg-cover px-4 py-8 pb-4 bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] ">
                <div className="overflow-hidden">
                  <h2 className="whitespace-nowrap overflow-x-auto text-2xl font-bold ">{note.title}</h2>
                <div className="text-gray-600 border px-2 py-1 font-medium mt-3 max-h-39 overflow-y-auto no-scrollbar wrap-break-words">{note.content}</div>
                </div>
                <button className="active:scale-85 w-2/3 self-center rounded font-bold  bg-red-600 cursor-pointer text-white" onClick={()=>{
                  deleteNote(note.id)
                }}>Delete Note</button>
              </div>
            )
          })}
        </div>
        
      </div>
    </div>
  )
}

export default App