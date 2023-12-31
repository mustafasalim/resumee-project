import { Button} from 'antd';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


function Header() {

  return (
    <header
  
     className="flex justify-evenly w-full h-[630px] bg-[#fafafa]  ">
        <div className='flex justify-evenly w-full mt-10'>
        <motion.div
          initial = {{opacity : 0, translateY : 30}}
          animate ={{opacity : 1 , translateY : 0}}
        >
            <div className="text-[96px] text-black font-bold">
                curriculum vitae
            </div>
            <div className="text-[#AAA] text-[32px] font-bold ">
            simplified CV preparation program <br/>
            <span className="text-red-500 font-extrabold">for you</span>
            </div>
            <div>
           <Link to="/create-cv">
           <Button className='bg-[#1677FF] mt-40 !h-16 w-40  rounded-[20px] font-bold  !text-[30px]' size="large" type="primary">create</Button>
           </Link>
            </div>
             
        </motion.div>

        <div>
            <img src="/image/resim.png" alt="" />

        </div>
        </div>
    </header>
  )
}

export default Header
