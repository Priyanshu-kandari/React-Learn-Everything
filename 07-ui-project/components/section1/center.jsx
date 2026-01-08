import ImageContainer from "./imageContainer"
import Lefttext from "./Lefttext"



const Center = (props) => {
  return (
    <div className="py-3 px-8 h-[91.1vh] flex justify-between gap-10">
        <Lefttext/>
        <ImageContainer cardData = {props.cardData}/>
  
    </div>
        )
}

export default Center