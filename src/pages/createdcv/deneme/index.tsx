import { Form, Card, Input, Button, Space, message } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { _cvWorkAndEducation } from "../../../redux/allCvState"

function EducationAndWork() {
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
  const [form] = Form.useForm()
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
  const dispatch = useDispatch()
  const onFinish = (values: any) => {
    dispatch(_cvWorkAndEducation(values))
    openMessage()
  }
  return (
    <>
      <Form
        onFinish={onFinish}
        form={form}
        validateMessages={validateMessages}
        autoComplete="off"
        initialValues={{ experience: [{}], education: [{}] }}
        className="w-full  "
      >
        {contextHolder}
        <div className="flex w-full mt-[181px] mb-[181px] items-center justify-evenly">
          <div className="w-[400px]  grid gap-2 ml-8 ">
            <div className="text-[20px] font-bold text-blue-500">
              work experience
            </div>
            <Form.List name="experience">
              {(fields, { add, remove }) => (
                <div
                  style={{
                    display: "flex",
                    rowGap: 16,
                    flexDirection: "column",
                  }}
                >
                  {fields.map((field) => (
                    <Card
                      size="small"
                      title="Workplace"
                      key={field.key}
                      extra={
                        <CloseOutlined
                          onClick={() => {
                            remove(field.name)
                          }}
                        />
                      }
                    >
                      <Form.Item
                        label="workplace"
                        name={[field.name, "name"]}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>

                      {/* Nest Form.List */}
                      <Form.Item label="working date">
                        <Form.List name={[field.name, "list"]}>
                          {(subFields, subOpt) => (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: 16,
                              }}
                            >
                              {subFields.map((subField) => (
                                <Space key={subField.key}>
                                  <Form.Item
                                    noStyle
                                    name={[subField.name, "first"]}
                                  >
                                    <Input placeholder="start date" />
                                  </Form.Item>
                                  <Form.Item
                                    noStyle
                                    name={[subField.name, "second"]}
                                  >
                                    <Input placeholder="end date" />
                                  </Form.Item>
                                  <CloseOutlined
                                    onClick={() => {
                                      subOpt.remove(subField.name)
                                    }}
                                  />
                                </Space>
                              ))}
                              <Button
                                type="dashed"
                                onClick={() => {
                                  subOpt.add()
                                }}
                                block
                                disabled={subFields.length > 0}
                              >
                                + Add work date
                              </Button>
                            </div>
                          )}
                        </Form.List>
                      </Form.Item>
                    </Card>
                  ))}

                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                  >
                    + Add work experience
                  </Button>
                </div>
              )}
            </Form.List>
          </div>
          <div className="w-[400px] grid gap-2 ml-8 ">
            <div className="text-[20px] font-bold text-blue-500">education</div>
            <Form.List name="education">
              {(fields, { add, remove }) => (
                <div
                  style={{
                    display: "flex",
                    rowGap: 16,
                    flexDirection: "column",
                  }}
                >
                  {fields.map((field) => (
                    <Card
                      size="small"
                      title="Academy"
                      key={field.key}
                      extra={
                        <CloseOutlined
                          onClick={() => {
                            remove(field.name)
                          }}
                        />
                      }
                    >
                      <Form.Item
                        label="academy"
                        name={[field.name, "name"]}
                        rules={[{ required: true }]}
                      >
                        <Input />
                      </Form.Item>

                      {/* Nest Form.List */}
                      <Form.Item label="academy date">
                        <Form.List name={[field.name, "list"]}>
                          {(subFields, subOpt) => (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: 16,
                              }}
                            >
                              {subFields.map((subField) => (
                                <Space key={subField.key}>
                                  <Form.Item
                                    noStyle
                                    name={[subField.name, "first"]}
                                  >
                                    <Input placeholder="start date" />
                                  </Form.Item>
                                  <Form.Item
                                    noStyle
                                    name={[subField.name, "second"]}
                                  >
                                    <Input placeholder="end date" />
                                  </Form.Item>
                                  <CloseOutlined
                                    onClick={() => {
                                      subOpt.remove(subField.name)
                                    }}
                                  />
                                </Space>
                              ))}
                              <Button
                                type="dashed"
                                onClick={() => subOpt.add()}
                                block
                                disabled={subFields.length > 0}
                              >
                                + Add education
                              </Button>
                            </div>
                          )}
                        </Form.List>
                      </Form.Item>
                    </Card>
                  ))}

                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                  >
                    + Add education
                  </Button>
                </div>
              )}
            </Form.List>
          </div>
        </div>
        <div className="flex ml-8 items-center h-full ">
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
    </>
  )
}

export default EducationAndWork
