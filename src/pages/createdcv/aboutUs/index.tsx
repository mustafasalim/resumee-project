import { Input, Form, Button, message } from "antd"
import { useDispatch } from "react-redux"
import { _aboutUs, _cvInformations } from "../../../redux/allCvState"

function PersonelInformations() {
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
        type: "success",
        content: "Approved please continue",
        duration: 3,
      })
    }, 1000)
  }

  const onFinish = (values: any) => {
    dispatch(_aboutUs(values))
    openMessage()
  }

  const dispatch = useDispatch()
  const [form] = Form.useForm()

  return (
    <Form
      onFinish={onFinish}
      form={form}
      validateMessages={validateMessages}
      className="grid gap-y-1 text-[#5c5959]"
    >
      {contextHolder}

      <div className="flex w-full justify-center mt-[96px] mb-[96px] items-center ml-8">
        <div className="grid gap-2">
          <div className="text-[20px] font-bold text-blue-500">About Us</div>
          <Form.Item
            className="w-[800px]"
            name="about"
            rules={[{ required: true, message: "Please input about" }]}
          >
            <Input.TextArea
              placeholder="Distinctio Et non quas amet mollitia illo accusamus ut"
              className="h-[110px] "
              showCount
              maxLength={1000}
            />
          </Form.Item>
        </div>
      </div>

      <div className="flex ml-8 mt-5">
        <Form.Item>
          <Button
            className="!bg-green-500"
            type="primary"
            htmlType="submit"
          >
            approve
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default PersonelInformations
