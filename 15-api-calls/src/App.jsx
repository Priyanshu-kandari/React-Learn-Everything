import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [Data, setData] = useState([])

  const getData = async() =>{
    let response = await axios.get("https://picsum.photos/v2/list")
    setData(response.data)
  }

  return (
    <>
    <button onClick={getData}>Hello</button>
    {Data.map((pic) => {
      return (
        <>
        <h1>{pic.author}</h1>
        <img src={pic.url} alt="" height={200} width={200}/>
        </>
      )
    })}
    </>
  )
}

export default App