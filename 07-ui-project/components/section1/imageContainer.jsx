import RightContent from "./rightContent"

const ImageContainer = (props) => {
  return (
    <div className="h-full w-2/3  overflow-x-auto no-scrollbar ">
      <div className="gap-5 h-full flex shrink-0">
        {props.cardData.map((elem,idx)=>{
          return <RightContent key={idx} idx={idx} colour={elem.color } img={elem.img} tag={elem.tag}/>

        })}

      </div>
      
      
      
    </div>
  )
}

export default ImageContainer