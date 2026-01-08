import Center from "./center"
import Navbar from "./Navbar"
Center

const Section1 = (props) => {
    return(<>
    
        
        <div className="h-screen w-full bg-white">
            <Navbar/>
            <Center cardData={props.cardData}/>
        </div>

        </>
    )
}

export default Section1