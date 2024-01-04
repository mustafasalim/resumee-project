import {  Space, Rate, message } from "antd"
import React, { useState } from "react"

function RatePages() {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"]
  const [value, setValue] = useState(3)
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Thank you continue',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <div>
       {contextHolder}
   <div className='flex items-center justify-center h-[433.42px]'>
     <div className='grid items-center justify-center'>
     <div className='text-[35px] font-bold'>do you like it</div>
     <Space onClick={openMessage}>
              <Rate
                className="text-[35px]"
                tooltips={desc}
                onChange={setValue}
                value={value}
              />
              <span className="text-[20px] text-gray-400">{value ? <span>{desc[value - 1]}</span> : ""}</span>
            </Space>
     </div>
   </div>
    </div>
  )
}

export default RatePages


