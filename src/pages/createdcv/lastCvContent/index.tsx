
import { _cvInformations } from "../../../redux/allCvState"

function LastCv() {
 

  return (
    <>
      <div className="flex w-full h-[1500px]">
        <div className="w-2/4 border-r">
          <div className="grid mt-5 ml-8">
            <div className="relative">
              <div className="w-[90px] absolute left-0 right-0 top- h-[90px] bg-blue-500 rounded-full overflow-hidden">
                <img
                  className="object-cover"
                  src="https://media.licdn.com/dms/image/D4D03AQEOmnPAbMGtXw/profile-displayphoto-shrink_200_200/0/1703677709757?e=1709769600&v=beta&t=tJcdDf8YvvTIlw4LaeFYAI3jfIn6Kel8JCwMr9lSvuI"
                  alt=""
                />
              </div>
              <div className="w-[340px] flex items-center justify-start text-right h-10 p-4 text-[20px] font-bold text-white  mt-6 ml-20 rounded-md bg-blue-500">
                Mustafa salim
              </div>
            </div>

            <div className="grid gap-y-0.5">
              <div className="mt-20 text-[22px] font-bold">name-surname</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                Mustafa salim
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">location</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                süleymaniye mahallesi şark sokak no 1 , Bursa/inegöl Türkiye
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">phone-number</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
              05511821947
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">e-posta</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
              salimmustafa763@gmail.com
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">birtday</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
              20/01/2004
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">gender</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
              male
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">nationality</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
              TC
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">marital status</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
              single
              </div>
            </div>
              
              <div className="grid mt-20">
                <div className="text-[30px] font-extrabold">Areas of interest</div>
                    
                      <ul className="ml-5 mt-5 text-[18px] font-bold text-[#B9B9B9] list-[upper-roman]">
                        
                       <li>fawfawfafw</li>
                       <li>fawfawfafw</li>
                       <li>fawfawfafw</li>
                       <li>fawfawfafw</li>
                       <li>fawfawfafw</li>
                       <li>fawfawfafw</li>
                       
                      </ul>
                 
              </div>
            
          </div>
         
        </div>

        <div className="w-2/4"></div>
      </div>
    </>
  )
}

export default LastCv
