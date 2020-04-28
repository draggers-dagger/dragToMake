import React, { Component } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import Modal from "./EditModal"
import Addfieldform from "./Renderedfrom";
import Dynamicform from "./AddFieldFroms/AddInput"
import "antd/dist/antd.css";
// import "../../styles/contact.css"

class ContactForm extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "",
    };
  }
  
  onFinish = (values) => {
    console.log("Sending mail...", values);
  };


  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Fill all fields.");
  };

  render() {
    return (
      <div id="contact" className="theme">
        <h2 className="heading">Contact Me</h2>
        <center>
        <div className="form-box">
          <Form
            className="form-wrapper"
            style={{width: "80%"}}
            ref={this.formRef}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Field Name"
              className="form-field"
              name="fieldname"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                placeholder="Field Name"
                className="form-control"
              />
            </Form.Item>
                <Modal
                  form={Addfieldform}
                />
                <Modal
                  form={Dynamicform}
                />
                <br/>
            <Form.Item
              name="mail"
            >
              <Input
                placeholder="Your Email"
                className="form-control"
              />
            </Form.Item>
                <button htmlType="submit" className="contact-submit">Submit</button>
          </Form>
          </div>
        </center>
      </div>
    );
  }
}

export default ContactForm;
