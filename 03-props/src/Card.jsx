function Card (props){
    return(
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.name}</h1>
            <p>{props.profession}</p>
            <button>Profile</button>
        </div> 
    )
}

export default Card