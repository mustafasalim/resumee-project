import { UploadOutlined } from "@ant-design/icons"
import { Button, Upload, Form, message } from "antd"
import type { UploadFile } from "antd/es/upload/interface"
import { useDispatch } from "react-redux"
import { _dateObject } from "../../../redux/allCvState"

function PhotoImg() {
  const fileList: UploadFile[] = [
    {
      uid: "-1",
      name: "yyy.png",
      status: "done",
      url: "image/resim5.png",
      thumbUrl: "image/resim5.png",
    },
  ]
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "",
    },

    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  }

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
        type: "error",
        content: "could not be confirmed (coming soon)",
        duration: 2,
      })
    }, 1000)
  }
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  const onFinish = (values: any) => {
    dispatch(_dateObject(values))
    openMessage()
  }

  const dispatch = useDispatch()

  const [form] = Form.useForm()
  return (
    <>
      {contextHolder}
      <Form
        onFinish={onFinish}
        form={form}
        validateMessages={validateMessages}
      >
        <div className="flex items-center text-blue-500 justify-center m-10 text-[25px] font-bold">
          <div>Profil Photo(coming soon)</div>
        </div>
        <div className="w-full  h-[320px] flex items-center justify-center">
          <div className="!w-[300px] mb-20 flex justify-center">
            <Form.Item
              valuePropName="fileList"
              getValueFromEvent={normFile}
              name={["photo"]}
              rules={[{ required: true, message: "Please select img" }]}
            >
              <Upload
                className="!w-[500px]"
                maxCount={1}
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                defaultFileList={[...fileList]}
              >
                <Button icon={<UploadOutlined />}>Upload (only png)</Button>
              </Upload>
            </Form.Item>
          </div>
        </div>
        <Form.Item className="ml-8">
          <Button
            className="!bg-green-500 hover:opacity-70"
            type="primary"
            htmlType="submit"
          >
            approve
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default PhotoImg
