import Card from "./componenets/card"

const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png",
    role: "Senior UI/UX Designer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$1200/hr",
    location: "Mumbai, India",
    date: "5 days ago"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
    role: "Frontend Developer",
    type: "Internship",
    level: "Entry Level",
    salary: "$800/hr",
    location: "Bangalore, India",
    date: "2 days ago"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    role: "React Developer",
    type: "Full Time",
    level: "Mid Level",
    salary: "$1000/hr",
    location: "Hyderabad, India",
    date: "1 week ago"
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s",
    role: "Product Designer",
    type: "Part Time",
    level: "Senior Level",
    salary: "$1500/hr",
    location: "Remote",
    date: "3 days ago"
  },
  {
    id: 5,
    company: "Meta",
    logo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    role: "UI Engineer",
    type: "Full Time",
    level: "Senior Level",
    salary: "$1400/hr",
    location: "Gurgaon, India",
    date: "6 days ago"
}
]


const App = () => {
    return(
        <>
        {jobs.map((elem)=>{
            return <Card
          key={elem.id}
          logo={elem.logo}
          company={elem.company}
          role={elem.role}
          type={elem.type}
          level={elem.level}
          salary={elem.salary}
          location={elem.location}
          date={elem.date}/>
        })}
        </>
        
        
    )
}

export default App