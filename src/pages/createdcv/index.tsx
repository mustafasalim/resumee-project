import React, { useState } from "react"
import { Button, message, Steps } from "antd"
import PersonelInformations from "./personalinformations"
import InterestAll from "./interest/InterestAll"
import LastCv from "./lastCvContent"
import EducationAndWork from "./deneme"
import RatePages from "./RatePage"
import AboutUs from "./aboutUs"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import PhotoImg from "./Photo"

const steps = [
  {
    title: "Personel Informations",
    content: <PersonelInformations />,
  },
  {
    title: "Profile photo",
    content: <PhotoImg />,
  },
  {
    title: "About Us",
    content: <AboutUs />,
  },
  {
    title: "Education And Work",
    content: <EducationAndWork />,
  },
  {
    title: "Technology - Areas of interest",
    content: <InterestAll />,
  },
  {
    title: "Finish",
    content: <LastCv />,
  },
  {
    title: "Rate",
    content: <RatePages />,
  },
]

const CreatedCv: React.FC = () => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }))
  const cvStateAll = useSelector((state: any) => state.cvReducer)
  console.log(cvStateAll.aboutUs)

  console.log(cvStateAll)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="w-full mt-36 mb-10 flex items-center justify-center font-['Rounded Mplus 1c']"
      >
        <div className="w-[1400px]">
          <div className="w-full  flex items-center justify-center">
            <div className="text-[34px] pb-10 font-bold ">curriculum vitae</div>
          </div>
          <Steps
            className="font-bold"
            current={current}
            items={items}
          />
          <div className="border rounded-md mt-5">{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button
                htmlType="submit"
                className="bg-[#1677FF] disabled:text-[#dbdada] disabled:!bg-[#F5F5F5]  font-bold"
                type="primary"
                onClick={() => next()}
                disabled={cvStateAll.informations.length === 0}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Link to="/">
                <Button
                  className="bg-[#1677FF] font-bold"
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              </Link>
            )}
            {current > 0 && (
              <Button
                className="font-bold"
                style={{ margin: "0 8px" }}
                onClick={() => prev()}
              >
                Previous
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default CreatedCv
