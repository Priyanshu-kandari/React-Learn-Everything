import {ArrowUpRight} from 'lucide-react'

const Lefttext = () => {
  return (
    <div className="h-full flex mt-7 flex-col justify-between w-1/3 p-5 ">
        <div className='' dir="ltr">
            <h3 className= ' mb-10  text-6xl/[1.3] font-semibold '> <span className='ms-4'>Prospective </span> <br /><span className='bg-gray-100 rounded-[50px] px-3 '>customer</span> <br /><span className='ms-3'>segmentation</span></h3>
            <p className='text-2xl/[1.6] font-medium  text-gray-600 ms-5'>Depending on customer <br />
              satisfaction and access <br /> to banking products,
              potential <br /> target audience can be divided <br /> into three groups
            </p>
        </div>
        <div className='h-50'>
            <ArrowUpRight size={128}/>
        </div>
    </div>
  )
}

export default Lefttext