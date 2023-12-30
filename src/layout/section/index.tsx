import { QRCode, Space } from 'antd';
function Section() {
  return (
    <section>

      <div className="flex justify-evenly w-full mt-40">
        <div className="text-black text-[64px] font-extrabold">
          We made CV designs
          <br />
          more modern and useful
        </div>
        <div className="w-[659px] h-[614px]">
          <img
            src="/image/resim2.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex  justify-center mt-10 mb-10 w-[1702px] h-px bg-zinc-300" />
      </div>

      <div className='mt-20 mb-40'>
        <div className='w-full flex items-center justify-center'>
          <Space>

            <QRCode type="svg" value="https://github.com/mustafasalim/resumee-project" />
          </Space>
        </div>

        <div className='text-black text-[40px] font-extrabold text-center  w-full flex items-center justify-center'>
        <div className='mt-10'>
        You can access the <span className='text-[#2C7FFB]'>github</span> page<br/>
          of the project by scanning the QR CODE.
        </div>
        </div>
      </div>
    </section>
  )
}

export default Section
