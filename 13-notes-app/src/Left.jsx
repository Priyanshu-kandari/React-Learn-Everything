import { useState } from "react"

const Left = (props) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")

  const submithandle = (e) =>{
    e.preventDefault()
    if(!title && !content) return
    props.addNote({id:Date.now(),title,content})
        }

  return (
    <>
    <form  className="flex items-start lg:p-10 p-5 gap-4  border-2 flex-col " onSubmit={submithandle}>
          <h1 className="self-center font-bold text-6xl mb-5">NOTES</h1>
          <input type="text" placeholder="Enter Title" className="px-5 py-2 border-2 bg-gray-900 rounded w-full text-4xl font-medium outline-none mb-5" value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }}/>
          <textarea placeholder="Enter Details" className="px-5 py-2 h-40  border-2 bg-gray-900 bg- rounded font-medium text-2xl w-full outline-none mb-5" value={content} onChange={(e)=>{
            setContent(e.target.value)
          }}></textarea>
          <button className="bg-white w-full h-12 text-3xl rounded  outline-none text-gray-700">ADD NOTES</button>
      </form>
    </>
  )
}

export default Left