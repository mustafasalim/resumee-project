import { Button } from "antd"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Header() {
  return (
    <header className="flex justify-evenly w-full h-[630px] border-b ">
      <div className="flex justify-evenly w-full mt-10">
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <div className="text-[96px] text-black font-bold">
            curriculum vitae
          </div>
          <div className="text-[#AAA] text-[32px] font-bold ">
            simplified CV preparation program <br />
            <span className=" font-extrabold">for you</span>
          </div>
          <div>
            <Link to="/create-cv">
              <Button
                className=" text-black-400 border-black transition-all !hover:bg-blue-400  mt-40 !h-16 w-40  rounded-[20px] font-bold   !text-[30px]"
                size="large"
                type="dashed"
              >
                create
              </Button>
            </Link>
          </div>
        </motion.div>

        <div>
          <img
            className="w-[550px]"
            src="https://img.freepik.com/free-photo/3d-rendering-little-girl-with-pilot-s-cap-goggles_1142-32335.jpg?t=st=1704650746~exp=1704654346~hmac=aa354dfb7a8d016916f7e78544bb699102e54475b538c548806dfb149d75da52&w=740"
            alt=""
          />
        </div>
      </div>
    </header>
  )
}

export default Header
