import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Example from './components/example'
import Example2 from './components/exampl2'
import WidgetBox from './components/layout/widgetBox'
import Container from './components/Container'
import Console from './components/layout/console'
import Chatbot from './components/layout/chatbot'
// import SexBomb from './components/example'
import Body from './components/layout/body'
class App extends Component {
  state={
    widget:null,
    type: null,
    WidgetLength:null,
    deleteWidget:null
  }
  handleCurrentWidget = (data, type)=>{
    this.setState({
      Widget:data,
      type: type
    })
  }
  handleAllWidget = async(data)=>{
    console.log(data)
    await this.setState({
      AllWidget : data,
      WidgetLength:data.length
    })
    console.log(this.state.AllWidget)
  }
  handleDeleteWidget =async(data) =>{
    console.log(data);
    await this.setState({
      deleteWidget:data
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
              {/* <DndProvider backend={HTML5Backend}>
                <Container deleteWidget={this.state.deleteWidget} type={this.state.type} widget={this.state.Widget} handleAllWidget={this.handleAllWidget} />
              </DndProvider> */}
              <Body deleteWidget={this.state.deleteWidget} type={this.state.type} widget={this.state.Widget} handleAllWidget={this.handleAllWidget}></Body>
            </div>
          </div>
        </div>
        {/* <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider> */}
      {this.state.WidgetLength && <Console handleDeleteWidget={this.handleDeleteWidget} AllWidget={this.state.AllWidget}/>}
        <Chatbot />
      </div>
    );
  }
}

export default App;
