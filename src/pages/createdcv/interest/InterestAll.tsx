import { Form, Input, Button, message } from "antd"
import { MinusCircleOutlined } from "@ant-design/icons"
import { PlusOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { _cvAreasOfInterest } from "../../../redux/allCvState"
function InterestAll() {
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
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const onFinish = (values: any) => {
    dispatch(_cvAreasOfInterest(values))
    openMessage()
  }
  return (
    <Form
      onFinish={onFinish}
      form={form}
      validateMessages={validateMessages}
    >
      {contextHolder}

      <div className="flex w-full mt-[169px] mb-[169px] items-center justify-evenly ml-8">
        <div className="w-[400px] grid gap-2">
          <div className="text-[20px] font-bold text-blue-500">
            technologies
          </div>
          <Form.List
            name="technologies"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error("At least 2 technologies"))
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field) => (
                  <Form.Item
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please input technologies name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder="interests name"
                        style={{ width: "60%" }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button ml-2 p-1"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "60%" }}
                    icon={<PlusOutlined />}
                  >
                    Add interests
                  </Button>

                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
        <div className="w-[400px] grid gap-2">
          <div className="text-[20px] font-bold text-blue-500">interests</div>
          <Form.List
            name="interests"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error("At least 2 interests"))
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field) => (
                  <Form.Item
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please input interests name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder="interests name"
                        style={{ width: "60%" }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button ml-2 p-1"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "60%" }}
                    icon={<PlusOutlined />}
                  >
                    Add interests
                  </Button>

                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>
      </div>
      <div className="flex ml-8 ">
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

export default InterestAll
