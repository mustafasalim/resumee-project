import { Input, DatePicker, Form, InputNumber,Select,Button,Upload,Card,Space } from "antd"
import { MinusCircleOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";






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
  };
  
  const { RangePicker } = DatePicker;
  const [workName,setWorkName] = useState("")
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    
  }


  
  const { Option } = Select;
  const [form] = Form.useForm();


 
  return (
    <Form
      onFinish={onFinish}
      form={form}
      validateMessages={validateMessages}
      className="grid gap-y-1 shadow-md  text-[#5c5959]"
     
    >
      <div className="flex items-center  justify-between ml-8 mr-[335px]">
        <div className="grid gap-2 mt-3 w-[500px]">
          <div className="">name-surname</div>
          <Form.Item
            name={["name", "surname"]}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="grid gap-2">
          <div className="">phone</div>
          <Form.Item
            name={["phone", "number"]}
            rules={[{ required: true, type: "number" }]}
          >
            <InputNumber className=" w-[500px]" />
          </Form.Item>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        <div className="grid gap-2 w-[500px]">
          <div className="">email</div>
          <Form.Item
            name={["email"]}
            rules={[{ type: "email",required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex  gap-5 w-[800px]">
          <div className="grid gap-2">
            <div className="">date of birth</div>
            <Form.Item
             name={["date", "birth"]}
             rules={[{ required: true }]}
             >
              <DatePicker />
            </Form.Item>
          </div>
          <div className="grid gap-2">
          <div className="">gender</div>
          <Form.Item
        name="gender"
       
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
          </div>
          <div className="grid gap-2">
          <div className="">nationality</div>
          <Form.Item
        name="nationaltiy"
       
        rules={[{ required: true, message: 'Please select nationaltiy' }]}
      >
        <Select placeholder="select your nationlatiy">
          <Option value="tr">TURKEY</Option>
          <Option value="eng">ENGLAND</Option>
          <Option value="grc">GREECE</Option>
          <Option value="us">US</Option>
          <Option value="grm">GERMANY</Option>
        </Select>
      </Form.Item>
          </div>
          <div className="grid gap-2">
          <div className="">nationality</div>
          <Form.Item
        name="martial"
       
        rules={[{ required: true, message: 'Please select martial status' }]}
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
    <div className="">location</div>
    <Form.Item
    className="w-[800px]"
        name="intro"
        
        rules={[{ required: true, message: 'Please input location' }]}
      >
        <Input.TextArea className="h-[110px]" showCount maxLength={100} />
      </Form.Item>
    </div>

 


   
    </div>

<div className="flex items-center">

    <div className="w-[400px] grid gap-2 ml-8 ">
      <div>work experience</div>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
            {fields.map((field) => (
              <Card
                size="small"
                title ={workName}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="workplace" name={[field.name, 'name']}>
                  <Input onChange={e => setWorkName(e.target.value)}/>
                </Form.Item>

                {/* Nest Form.List */}
                <Form.Item label="working date">
                  <Form.List name={[field.name, 'list']}>
                    {(subFields, subOpt) => (
                      <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                        {subFields.map((subField) => (
                          <Space key={subField.key}>                     
                            <Form.Item noStyle name={[subField.name, 'second']}>
                            <RangePicker />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add()} block>
              + Add Item
            </Button>
          </div>
        )}
      </Form.List>
    </div>
    <div className="w-[400px] grid gap-2 ml-8 ">
      <div>education</div>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
            {fields.map((field) => (
              <Card
                size="small"
                title ={workName}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="workplace" name={[field.name, 'name']}>
                  <Input onChange={e => setWorkName(e.target.value)}/>
                </Form.Item>

                {/* Nest Form.List */}
                <Form.Item label="working date">
                  <Form.List name={[field.name, 'list']}>
                    {(subFields, subOpt) => (
                      <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                        {subFields.map((subField) => (
                          <Space key={subField.key}>                     
                            <Form.Item noStyle name={[subField.name, 'second']}>
                            <RangePicker />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}

            <Button type="dashed" onClick={() => add()} block>
              + Add Item
            </Button>
          </div>
        )}
      </Form.List>

    </div>
    <div className="w-[400px] grid mt-[23px] gap-2 ml-8 ">
      <div>interest</div>
    <Form.List
      name="interests"
      rules={[
        {
          validator: async (_, names) => {
            if (!names || names.length < 2) {
              return Promise.reject(new Error('At least 2 passengers'));
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
                validateTrigger={['onChange', 'onBlur']}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: "Please input interests name or delete this field.",
                  },
                ]}
                noStyle
              >
                <Input placeholder="interests name" style={{ width: '60%' }} />
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
              style={{ width: '60%' }}
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
<div className="flex ml-8">
<div className="grid gap-2">
    <div className="">about us</div>
    <Form.Item
        className="w-[800px]"
        name="about"
        rules={[{ required: true, message: 'Please input about' }]}
      >
        <Input.TextArea className="h-[300px]" showCount maxLength={500} />
      </Form.Item>
    </div>
</div>

<div className="flex ml-8">

  <div className="grid gap-2">
    <div>programming languages</div>
    <Form.Item
    className="w-[400px]"
      name="select-multiple"
      rules={[{ required: true, message: 'Please select your language', type: 'array' }]}
    >
      <Select mode="multiple" placeholder="Please select favourite language">
        <Option value="red">Red</Option>
        <Option value="green">Green</Option>
        <Option value="blue">Blue</Option>
      </Select>
    </Form.Item>

  </div>

</div>

<div className="flex ml-8 mt-5">
<Form.Item>
      <Button className="!bg-green-600"   type="primary" htmlType="submit">
         approve
      </Button>
    </Form.Item>

</div>

    </Form>
  )
}

export default PersonelInformations
