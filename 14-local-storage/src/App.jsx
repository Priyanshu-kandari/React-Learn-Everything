const App = () => {
  const user = {
    username: 'sarthak',
    age:18,
    city:'Bhopal'
  }

  localStorage.setItem("user",JSON.stringify(user))
  const userInfo = JSON.parse(localStorage.getItem("user"))
  console.log(userInfo)

  return(
    <div>APP</div>
  )

}

export default App