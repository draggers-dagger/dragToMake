import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button, message } from 'antd';
import './App.css';
import WidgetBox from './components/layout/widgetBox'
import Console from './components/layout/console'
import Chatbot from './components/layout/chatbot'
import axios from 'axios'
import Body from './components/layout/body'
class App extends Component {
  state = {
    widget: null,
    type: null,
    WidgetLength: null,
    deleteWidget: null
  }

  handleExport = () => {
    console.log(this.state.AllWidget)
    var componentArray = this.state.AllWidget.forEach(function(v){ delete v.title });
    var postData = {
      componentsArray: this.state.AllWidget
    }
    console.log(postData,"arrrsy")
    axios.post('http://localhost:8080/add', postData)
      .then(res => {
        console.log(res, "resssssss")
        message.success('Webpage expoted successfully');
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleCurrentWidget = (data, type) => {
    this.setState({
      Widget: data,
      type: type
    })
  }
  handleAllWidget = async (data) => {
    console.log(data, "hehehehhehhehh")
    await this.setState({
      AllWidget: data,
      WidgetLength: data.length
    })
    // console.log(this.state.AllWidget)
  }
  handleDeleteWidget = async (data) => {
    console.log(data);
    await this.setState({
      deleteWidget: data
    })
    console.log(this.state.deleteWidget)
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div style={{ backgroundColor: "#f5f5f5", height: "100vh", overflow: "scroll" }} className="col-sm-2">
              <WidgetBox widget={this.handleCurrentWidget} />
            </div>
            <div style={{ height: "100vh", borderStyle: "solid", borderTop: "none", borderBottom: "none", borderRight: "none", overflow: "scroll" }} className="col-sm-10">  
              <Body deleteWidget={this.state.deleteWidget} type={this.state.type} widget={this.state.Widget} handleAllWidget={this.handleAllWidget}></Body>
            </div>
            <div className="export-btn" >
              <Button onClick={() => this.handleExport()} style={{ backgroundColor: "#28A745", color: "white" }} color="green" >EXPORT</Button>
            </div>
          </div>
        </div>
        {this.state.WidgetLength && <Console handleDeleteWidget={this.handleDeleteWidget} AllWidget={this.state.AllWidget} />}
        <Chatbot />
      </div>
    );
  }
}

export default App;
