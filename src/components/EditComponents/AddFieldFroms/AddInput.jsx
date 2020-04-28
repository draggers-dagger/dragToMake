import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./addForm.css";

const tailLayout = {
  wrapperCol: {
    offset: 19,
    span: 5,
  },
};

class ContactForm extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log("form data", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <Form onFinish={this.onFinish} className="my-form">
        <Form.List name="formFields">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Row key={field.key} gutter={16}>
                    <Col span={11}>
                      <Form.Item
                        name={[field.name, "label"]}
                        fieldKey={[field.fieldKey, "value"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input field label/placeholder or delete this field.",
                          },
                        ]}
                      >
                        <Input placeholder="Label" />
                      </Form.Item>
                    </Col>
                    <Col span={11}>
                      <Form.Item
                        name={[field.name, "value"]}
                        fieldKey={[field.fieldKey, "value"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input field value or delete this field.",
                          },
                        ]}
                      >
                        <Input placeholder="Value" />
                      </Form.Item>
                    </Col>
                    <Col flex="none">
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    style={{ width: "100%" }}
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        <Form.Item {...tailLayout}>
          <Button key="back" onClick={this.props.onCancel}>
            Return
          </Button>
          <Button style={{ marginLeft: "5%" }} htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default ContactForm;
