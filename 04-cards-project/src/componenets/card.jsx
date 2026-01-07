import { Bookmark } from "lucide-react"

function Card(props) {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src={props.logo}
            alt={`${props.company} logo`}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/80?text=Logo"
            }}
          />

          <button>
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <h3>
            {props.company} <span>{props.date}</span>
          </h3>

          <h2>{props.role}</h2>

          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        <div className="bottom">
          <div className="bottom-right">
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>

          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
