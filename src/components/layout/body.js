import React, { Component } from 'react'
import { Rnd } from "react-rnd";
import update from 'immutability-helper'
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxesArray: [],
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.widget !== this.props.widget) {
      const components = {
        component: this.props.widget
      }
      const id = Date.now()
      await this.setState({
        boxesArray: [...this.state.boxesArray, { id: id, title: this.props.widget, type: this.props.type, left: 0, top: 0 }]
      }, () => this.props.handleAllWidget(this.state.boxesArray))
    }
    if (prevProps.deleteWidget !== this.props.deleteWidget) {
      console.log(this.props.deleteWidget.id)
      await this.setState({
        boxesArray: this.state.boxesArray.filter(function (widget) {
          return widget.id !== this.props.deleteWidget.id
        }.bind(this))
      })
      this.props.handleAllWidget(this.state.boxesArray)
    }
  }

  render() {
    const style = {
      display: "flex",
      // alignItems: "center",
      // justifyContent: "center"
      // border: "solid 1px #ddd"
      // background: "#f0f0f0"
    };
    console.log(this.state, "stateee")
    return (
      <div className="container-fluid" style={{ marginTop: "3%", height: "300%", border: "solid", overflowY: "scroll", overflowX: "hidden" }}>
        {/* <div className="container-fluid" style={{ height: "200%" }}> */}
        {this.state.boxesArray.map((item, i) => {
          const { title, id } = item
          return (
            <Rnd
              style={style}
              default={{
                x: 0,
                y: 0,
                width: "auto",
                height: "auto"
              }}
              onDragStop={(e, d) => {
                var objIndex = this.state.boxesArray.findIndex((obj => obj.id == id))
                this.setState({
                  boxesArray: update(this.state.boxesArray, {
                    [objIndex]: {
                      left: { $set: d.x },
                      top: { $set: d.y }
                    }
                  })
                })
                this.props.handleAllWidget(this.state.boxesArray)
                this.setState({ x: d.x, y: d.y });
              }}
              onResize={(e, direction, ref, delta, position) => {
                var objIndex = this.state.boxesArray.findIndex((obj => obj.id == id))
                this.setState({
                  boxesArray: update(this.state.boxesArray, {
                    [objIndex]: {
                      width: { $set: ref.offsetWidth },
                      height: { $set: ref.offsetHeight }
                    }
                  })
                })
                this.props.handleAllWidget(this.state.boxesArray)
                this.setState({
                  width: ref.offsetWidth,
                  height: ref.offsetHeight,
                  ...position
                });
              }}
            >
              {title}
            </Rnd>


          )
        })}
        {/* </div> */}
      </div>
    )
  }
}

export default Body