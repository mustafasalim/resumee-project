import { useSelector } from "react-redux"
import { _cvInformations } from "../../../redux/allCvState"
import { usePDF } from "react-to-pdf"
import uniqolor from "uniqolor"
import { RootState } from "@reduxjs/toolkit/query"
import { Button } from "antd"
import { FilePdfOutlined } from "@ant-design/icons"

function LastCv() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" })

  const randomColor = uniqolor.random()

  console.log(randomColor.color)
  const cvStateAll = useSelector((state: RootState) => state.cvReducer)

  console.log(cvStateAll.informations)

  // you can use a function to return the target element besides using React refs

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <Button
          className="mt-10 mb-10 text-[20px] flex items-center p-5 !bg-red-500 hover:opacity-50"
          onClick={() => toPDF()}
          type="primary"
          icon={<FilePdfOutlined />}
        >
          Download(PDF)
        </Button>
      </div>
      <div
        ref={targetRef}
        id="content-id"
        className="flex w-full "
      >
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
              <div className="w-[340px] flex items-center justify-start text-right h-10 text-[20px] font-bold text-white  mt-6 ml-20 pl-5 rounded-md bg-blue-500">
                {cvStateAll.informations.name.surname}
              </div>
            </div>

            <div className="grid gap-y-0.5">
              <div className="mt-20 text-[22px] font-bold">name-surname</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                {cvStateAll.informations.name.surname}
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">location</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                {cvStateAll.informations.location}
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">phone-number</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                {cvStateAll.informations.phone.number}
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">e-posta</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                {cvStateAll.informations.email}
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
                {cvStateAll.informations.gender}
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">nationaltiy</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                {cvStateAll.informations.nationaltiy}
              </div>
            </div>
            <div className="grid gap-y-0.5">
              <div className="mt-4 text-[22px] font-bold">marital status</div>
              <div className="text-[16px] font-bold text-[#B9B9B9]">
                {cvStateAll.informations.martial}
              </div>
            </div>

            <div className="grid mt-20 mb-10">
              <div className="text-[30px] font-extrabold">
                Areas of interest
              </div>

              <ul className={`mt-5 text-[18px] font-bold text-[#B9B9B9]`}>
                {cvStateAll.areasOfInterest.length === 0 ? (
                  <div>-</div>
                ) : (
                  <div>
                    {cvStateAll.areasOfInterest.interests.map((title: any) => (
                      <li>{title}</li>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-2/4">
          <div className="grid mt-5 ml-8">
            <div className="text-[26px] font-bold">work experience</div>
            <div className="h-0.5 mt-3 w-[500px] rounded-3xl bg-[#f0f0f0]"></div>
            {cvStateAll.workAndEducation.length === 0 ? (
              <div>-</div>
            ) : (
              <div>
                {cvStateAll.workAndEducation.experience.map((title: any) => (
                  <div className="mt-4">
                    <div className=" flex items-center gap-x-3">
                      <div className="text-[20px] font-bold break-words">
                        <div>{title.name}</div>
                      </div>
                    </div>
                    <div className="text-[#acacac] text-[15px] font-bold">
                      {title.list.map((date: any) => (
                        <>
                          <span>{date.first}</span>
                          <span>-</span>
                          <span>{date.second}</span>
                        </>
                      ))}{" "}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="grid mt-24 ml-8">
            <div className="text-[26px] font-bold">education</div>
            <div className="h-0.5 mt-3 w-[500px] rounded-3xl bg-[#f0f0f0]"></div>
            {cvStateAll.workAndEducation.length === 0 ? (
              <div>-</div>
            ) : (
              <div>
                {cvStateAll.workAndEducation.education.map((title: any) => (
                  <div className="mt-4">
                    <div className=" flex items-center gap-x-3">
                      <div className="text-[20px] font-bold break-words">
                        {title.name}
                      </div>
                    </div>
                    <div className="text-[#acacac] text-[15px] font-bold">
                      {title.list.map((date: any) => (
                        <>
                          <span>{date.first}</span>
                          <span>-</span>
                          <span>{date.second}</span>
                        </>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid mt-24 ml-8">
            <div className="text-[26px] font-bold">about</div>
            <div className="h-0.5 mt-3 w-[500px] rounded-3xl bg-[#f0f0f0]"></div>

            <div className="mt-4">
              <div className="text-[15px] break-words font-bold leading-8 ">
                {cvStateAll.aboutUs.length === 0 ? (
                  <div>-</div>
                ) : (
                  <div>{cvStateAll.aboutUs.about}</div>
                )}
              </div>
            </div>
          </div>
          <div className="grid mt-5 ml-8">
            <div className="text-[26px] font-bold"></div>
            <div className="h-0.5 mt-3 w-[500px] rounded-3xl bg-[#f0f0f0]"></div>

            <div className="mt-4">
              <ul className="flex gap-x-4 text-[15px] font-bold">
                {cvStateAll.areasOfInterest.length === 0 ? (
                  <div>-</div>
                ) : (
                  <div>
                    {cvStateAll.areasOfInterest.technologies.map(
                      (title: any) => (
                        <li className={`text-[${randomColor.color}]`}>
                          {title},
                        </li>
                      )
                    )}
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LastCv
