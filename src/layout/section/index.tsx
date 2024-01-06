import { QRCode, Space, Rate, message } from "antd"
import { useState } from "react"

function Section() {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"]
  const [value, setValue] = useState(3)
  const [messageApi, contextHolder] = message.useMessage()
  const key = "updatable"
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    })
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Thank you",
        duration: 2,
      })
    }, 1000)
  }

  return (
    <section>
      {contextHolder}
      <div className="flex justify-evenly w-full mt-40">
        <div className="text-black text-[64px] font-extrabold">
          We made CV designs
          <br />
          more modern and useful
          <div className="mt-56 text-[40px] text-green-500">
            <Space onClick={openMessage}>
              <Rate
                tooltips={desc}
                onChange={setValue}
                value={value}
              />
              {value ? <span>{desc[value - 1]}</span> : ""}
            </Space>
          </div>
        </div>
        <div className="w-[659px] h-[614px] shadow-md">
          <img
            src="/image/resim3.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex  justify-center mt-10 mb-10 w-[1702px] h-px bg-zinc-300" />
      </div>

      <div className="mt-20 mb-40">
        <div className="w-full flex items-center justify-center">
          <Space className="flex gap-10">
            <QRCode
              className=""
              errorLevel="H"
              value="https://github.com/mustafasalim/resumee-project"
              icon="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <QRCode
              errorLevel="H"
              value="https://resumee-project.vercel.app/"
              icon="https://www.svgrepo.com/show/327408/logo-vercel.svg"
            />
          </Space>
        </div>

        <div className="text-black text-[40px] font-extrabold text-center  w-full flex items-center justify-center">
          <div className="mt-10">
            You can access the <span className="text-[#2C7FFB]">github</span>{" "}
            and <br /> <span className="text-[#2C7FFB]">vercel</span> project by
            scanning the QR code.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
