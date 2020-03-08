// import React, { Component } from "react";
// import { EditOutlined } from "@ant-design/icons";
// import { Form, Input, Button, Checkbox } from "antd";
// // class Modal1 extends React.Component {

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 }
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 }
// };

// class CardEdit extends React.Component {
//   onFinish = values => {
//     console.log("Success:", values);
//   };

//   onFinishFailed = errorInfo => {
//     console.log("Failed:", errorInfo);
//   };
//   render() {
//     return (
//       <Form
//         {...layout}
//         name="basic"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[{ required: true, message: "Please input your username!" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please input your password!" }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <Form.Item {...tailLayout}>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// export default CardEdit;
