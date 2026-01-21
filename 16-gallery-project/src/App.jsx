import axios from 'axios'
import { useEffect, useState } from 'react'
const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(()=>{
    getdata()
  },[index])


  return (
    <div className="bg-black min-h-screen text-center p-5">
      <h1 className='text-gray-300 text-5xl mb-10'>IMAGE GALLERY</h1>
      
      <div className="text-gray-50 mt-5 flex justify-around flex-wrap gap-10">
      {userData.length===0?(
        <p className='text-gray-400 text-6xl'>Loading...</p>
      ):(
        userData.map((data,idx)=>{
          return (
          <a href={data.url} target='blank'>
            <div key={idx}>
            <div className='h-80 w-80 overflow-hidden bg-white rounded-xl'>
              <img className='h-full  w-full object-cover' src={data.download_url} alt="" />
            </div>
            <h3 className='text-center text-2xl'>{data.author}</h3>            
            </div>
          </a>
          )
        })
      )}
      </div>

      <div className='mt-10  flex justify-center gap-20 '>
        <button style={{opacity: index<2?0.5:null}} className='bg-amber-600 text-sm cursor-pointer active:scale-90 text-black rounded px-4 py-2' onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}>PREV</button>
        <h2 className='text-gray-400 text-xl '>Page {index}</h2>
        <button className='bg-amber-600 text-sm cursor-pointer active:scale-90 text-black rounded px-4 py-2' onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}>NEXT</button>
      </div>
    </div>
  )
}

export default App
