import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Rnd } from "react-rnd";
import update from 'immutability-helper'
import ContentEditable from "react-contenteditable";
import { mapComponent } from '../../helperFunction/switchComponents'
import {
  editHeading
} from '../../actions/edit_heading'
import {
  addCard, addNewWidget, updateWidgetPosition, updateWidgetSize
} from '../../actions'
// import
// cardActions
//  from '../../actions/index'
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxesArray: [],
      html: "Edit <b>me</b> <i>Pranay</i> !"
    }
  }
  handleChange = evt => {
    this.setState({ html: evt.target.value });
    console.log(this.state.html)
  };

  handleOnFocus = e => {
    console.log("focusinggg")
    this.props.editHeading(true)
    this.props.addCard("www.hahaha.com", "Maaro bc", "kuch bhii lelo bhayo")
  }

  handleOnBlur = e => {
    console.log("bluring")
    this.props.editHeading(false)
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.widget !== this.props.widget) {
      const id = Date.now()
      this.props.addNewWidget(this.props.type, {left:0, top:0}, {width: "auto", height: "auto"})
      // await this.setState({
      //   boxesArray: [...this.state.boxesArray, { id: id, type: this.props.type, left: 0, top: 0 }]
      // }, () => this.props.handleAllWidget(this.state.boxesArray))
    }
    if (prevProps.deleteWidget !== this.props.deleteWidget) {
      console.log(this.props.deleteWidget.id)
      await this.setState({
        boxesArray: this.state.boxesArray.filter(function (widget) {
          return widget.id !== this.props.deleteWidget.id
        }.bind(this))
      }, () => console.log(this.state.boxesArray, "arrrray"))
      this.props.handleAllWidget(this.state.boxesArray)
    }
  }

  render() {
    const style = {
      display: "flex"

    };
    console.log(this.props.allWidgetsArray, "pleaaeee")
    return (
      <div className="container-fluid" style={{ marginTop: "3%", height: "300%", border: "solid", overflowY: "scroll", overflowX: "hidden" }}>
        {/* <div className="container-fluid" style={{ height: "200%" }}> */}
        {this.props.allWidgetsArray.widgets.map((item, i) => {
          {/* const { id, type } = item */}
          const { widgetID: id, type } = item
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
                {/* var objIndex = this.state.boxesArray.findIndex((obj => obj.id == id)) */}
                this.props.updateWidgetPosition(id, {x: d.x, y: d.y})
                {/* this.setState({
                  boxesArray: update(this.state.boxesArray, {
                    [objIndex]: {
                      left: { $set: d.x },
                      top: { $set: d.y }
                    }
                  })
                }) */}
                this.props.handleAllWidget(this.state.boxesArray)
                this.setState({ x: d.x, y: d.y });
              }}
              onResize={(e, direction, ref, delta, position) => {
                {/* var objIndex = this.state.boxesArray.findIndex((obj => obj.id == id)) */}
                this.props.updateWidgetSize(id, {offsetWidth: ref.offsetWidth, offsetHeight: ref.offsetHeight})
                {/* this.setState({
                  boxesArray: update(this.state.boxesArray, {
                    [objIndex]: {
                      width: { $set: ref.offsetWidth },
                      height: { $set: ref.offsetHeight }
                    }
                  })
                }) */}
                this.props.handleAllWidget(this.state.boxesArray)
                this.setState({
                  width: ref.offsetWidth,
                  height: ref.offsetHeight,
                  ...position
                });
              }}
            >
              {mapComponent(type)}
            </Rnd>

          )
        })}
        {/* </div> */}
        <ContentEditable
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
          ref={this.textInput}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  edit_heading: state.editHeading,
  allWidgetsArray: state.allWidgets
})

const mapDispatchToProps = dispatch => ({
  editHeading
})

export default connect(mapStateToProps, {
  editHeading,
  addCard,
  addNewWidget,
  updateWidgetPosition,  
  updateWidgetSize
})(Body)