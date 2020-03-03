import React, { Component } from 'react'
import { Modal, Button, Icon } from "antd";
class Modal1 extends React.Component {
  state = { visible: false };

  showModal = () => {
      console.log("huaa")
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>
          Open Modal
        </Button>
        {/* <Icon onClick={this.showModal} style={{ pointer: "cursor" }} type="edit" /> */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default Modal1;
