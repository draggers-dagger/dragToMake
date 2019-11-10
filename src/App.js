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
// import SexBomb from './components/example'

class App extends Component {
  state={
    widget:null,
    type: null
  }
  handleCurrentWidget = (data, type)=>{
    this.setState({
      Widget:data,
      type: type
    })
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
              <DndProvider backend={HTML5Backend}>
                <Container type={this.state.type} widget={this.state.Widget} />
              </DndProvider>
            </div>
          </div>
        </div>
        {/* <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider> */}
      </div>
    );
  }
}

export default App;
