import React, { Component } from 'react'
import { Icon, Button, Tag } from 'antd'
class WidegetBox extends Component {
  addWidget = (component)=>{
    this.props.widget(component)
  }
  render() {
    return (
          <div>
            <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <h4 >
                Widgets
              </h4>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button onClick={()=>this.addWidget('Example')} className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }} className="fa fa-navicon" /> <br></br>
                Nav Bar
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button onClick={()=>this.addWidget(<Tag closable color="magenta">magenta</Tag>)} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="idcard" />
                <br></br>
                Card
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="pie-chart" /> <br></br>
                Pie Chart
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="bar-chart" />
                <br></br>
                Bar chart
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }} className="fa fa-header"/>
                <br></br>
                Heading
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }}  type="desktop" />
                <br></br>
                I Frame
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="border" /> <br></br>
                Footer
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="google" />
                <br></br>
                Google
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="facebook" /> <br></br>
                Facebook
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="linkedin" />
                <br></br>
                LinkedIn
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="github" /> <br></br>
                github
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="youtube" />
                <br></br>
                Youtube
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }} className="fa fa-map-marker" /> <br></br>
                Map
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }}  className="fa fa-paragraph" />
                <br></br>
                Paragraph
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }} className="fa fa-youtube" /> <br></br>
                Frame
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }}  className="fa fa-calendar" />
                <br></br>
                Card
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }} className="fa fa-square-o" /> <br></br>
                Button
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="idcard" />
                <br></br>
                Card
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" /> <br></br>
                Nav Bar
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="idcard" />
                <br></br>
                Card
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" /> <br></br>
                Nav Bar
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="idcard" />
                <br></br>
                Card
              </button>
            </div>
          </div>
          </div>
    )
  }
}

export default WidegetBox