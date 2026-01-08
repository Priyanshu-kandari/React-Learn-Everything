import {ArrowUpRight} from 'lucide-react'

const RightContent = (props) => {
  return (
    <div className=" rounded-4xl   h-[90%] w-87.5 shrink-0 overflow-hidden relative">
      <img src={props.img}  className="object-cover w-full  h-full  scale-[1.5] transform translate-y-[-20%] translate-x-[-15%] overflow-hidden ">
      </img>
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className=" z-10 absolute inset-0 flex flex-col justify-between p-10"><div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center text-2xl ">{props.idx+1}</div>
      <div>
         <div className=" mb-20 text-2xl text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dolor </div>
         <div className='mb-4 flex justify-between'>
          <button className="text-white font-medium px-3 py-2 rounded-4xl " style={{backgroundColor:props.colour}} >{props.tag}</button>
          <button className='text-white px-3 py-2 transform rotate-x-14'> < ArrowUpRight size={36} className='rotate-z-45'/></button>
         </div>
         
      </div>
     
      </div>

      
      
    </div>
  )
}

export default RightContent