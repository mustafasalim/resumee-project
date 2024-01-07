import {
  Input,
  DatePicker,
  Form,
  InputNumber,
  Select,
  Button,
  message,
} from "antd"
import { useDispatch } from "react-redux"
import { _cvInformations, _dateObject } from "../../../redux/allCvState"
import { useSelector } from "react-redux"

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
  const cvStateAll = useSelector((state: any) => state.cvReducer)

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
    dispatch(_cvInformations(values))
    openMessage()
  }

  const dispatch = useDispatch()

  const { Option } = Select
  const [form] = Form.useForm()

  return (
    <Form
      onFinish={onFinish}
      form={form}
      validateMessages={validateMessages}
      className="grid gap-y-1 text-[#5c5959]"
    >
      {contextHolder}
      <div className="flex items-center  justify-between ml-8 mr-[335px]">
        <div className="grid gap-2 mt-3 w-[500px]">
          <div className="font-bold">name-surname</div>
          <Form.Item
            name={["name", "surname"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="Jhon Doe" />
          </Form.Item>
        </div>
        <div className="grid gap-2 mt-2">
          <div className="font-bold">phone</div>
          <Form.Item
            name={["phone", "number"]}
            rules={[{ required: true, type: "number" }]}
          >
            <InputNumber
              placeholder="05543754****"
              className=" w-[500px]"
            />
          </Form.Item>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <div className="grid gap-2 w-[500px]">
          <div className="font-bold">email</div>
          <Form.Item
            name={["email"]}
            rules={[{ type: "email", required: true }]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>
        </div>
        <div className="flex  gap-5 w-[800px]">
          <div className="grid gap-2">
            <div className="font-bold">date of birth</div>
            <Form.Item
              name={"dateOfBirth"}
              rules={[{ required: true, type: "object" }]}
            >
              <DatePicker
                format="DD/MM/YYYY"
                placeholder="DD/MM/YYYY"
                allowClear={false}
              />
            </Form.Item>
          </div>
          <div className="grid gap-2">
            <div className="font-bold">gender</div>
            <Form.Item
              name="gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid gap-2">
            <div className="font-bold">nationality</div>
            <Form.Item
              name="nationaltiy"
              rules={[{ required: true, message: "Please select nationaltiy" }]}
            >
              <Select placeholder="select your nationlatiy">
                <Option value="TURKEY">TURKEY</Option>
                <Option value="ENGLAND">ENGLAND</Option>
                <Option value="GREECE">GREECE</Option>
                <Option value="US">US</Option>
                <Option value="GERMANY">GERMANY</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="grid gap-2">
            <div className="font-bold">marital status</div>
            <Form.Item
              name="martial"
              rules={[
                { required: true, message: "Please select martial status" },
              ]}
            >
              <Select placeholder="select your nationlatiy">
                <Option value="single">Single</Option>
                <Option value="married">Married</Option>
                <Option value="windowed">Widowed</Option>
                <Option value="divorced">Divorced</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-8">
        <div className="grid gap-2">
          <div className="font-bold">location</div>
          <Form.Item
            className="w-[800px]"
            name="location"
            rules={[{ required: true, message: "Please input location" }]}
          >
            <Input.TextArea
              placeholder="Distinctio Et non quas amet mollitia illo accusamus ut"
              className="h-[110px]"
              showCount
              maxLength={100}
            />
          </Form.Item>
        </div>
      </div>

      <div className="flex ml-8 mt-5">
        <Form.Item>
          <Button
            className="!bg-green-500 hover:opacity-70"
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
