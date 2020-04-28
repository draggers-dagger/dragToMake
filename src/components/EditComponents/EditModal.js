import React, { Component } from 'react'
import { Modal, Button, Icon, Form } from "antd";
import { EditOutlined } from '@ant-design/icons';
import EditForm from "../EditComponents/Renderedfrom"


class Modal1 extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>
          {this.props.buttonValue ? this.props.buttonValue : "Open Modal"}
        </Button>
        <Modal
          title={this.props.modalHeading ? this.props.modalHeading :"Add Field Modal"}
          centered
          footer={null}
          width={800}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         <this.props.form
            onCancel={this.handleCancel}
            closeModal={this.handleOk}
         />
        </Modal>
      </div>
    );
  }
}

export default Modal1;
