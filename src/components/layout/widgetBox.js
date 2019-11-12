import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import Piechart from '../widgets/piechart'
import Areagraph from '../widgets/Areagraph'
import Bargraph from '../widgets/Bargraph'
import Card from '../widgets/Card'
import Tag from '../widgets/Tag'
import Timeline from '../widgets/Timeline'
import Carousel from '../widgets/Carousel'
import Navbar from '../widgets/Navbar'
import FacebookFrame from '../widgets/Facebook'
import LinkedInFrame from '../widgets/Linkedin'
import YoutubeFrame from '../widgets/YouTubeFrame'
import Footer from '../widgets/Footer'
import TwitterFrame from '../widgets/Twitter'
import GoogleFrame from '../widgets/Map'
class WidegetBox extends Component {
  addWidget = (component, type)=>{
    console.log(component)
    this.props.widget(component, type)
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
              <button onClick={()=>this.addWidget(<Navbar/>, 'Navbar')} className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }} className="fa fa-navicon" /> <br></br>
                Nav Bar
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button onClick={()=>this.addWidget(<Card />, 'Card')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="idcard" />
                <br></br>
                Card
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button onClick={()=>this.addWidget(<Piechart />, 'Piechart')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="pie-chart" /> <br></br>
                Pie Chart
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button onClick={()=>this.addWidget(<Bargraph />, 'Bargraph')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="bar-chart" />
                <br></br>
                Bar chart
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button onClick={()=>this.addWidget(<Areagraph />, 'Areagraph')} className="btn btn-dark btn-block">
              <Icon style={{ fontSize: "30px" }} type="dot-chart" />  <br></br>
                Dot chart
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button onClick={()=>this.addWidget(<Tag />, 'Tag')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="tag" />
                <br></br>
                Color Tag
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button onClick={()=>this.addWidget(<Timeline />, 'Timeline')} className="btn btn-dark btn-block">
                <icon style={{ fontSize: "30px" }} className="fa fa-briefcase"/>
                <br></br>
                Timeline
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button onClick={()=>this.addWidget(<Carousel/>, 'Carousel')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }}  type="desktop" />
                <br></br>
                  Carousel
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
              <button onClick={()=>this.addWidget(<Footer/>, 'Footer')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="border" /> <br></br>
                Footer
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button onClick={()=>this.addWidget(<TwitterFrame/>, 'TwitterFrame')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="twitter" />
                <br></br>
                Twitter
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button onClick={()=>this.addWidget(<FacebookFrame />, 'FacebookFrame')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="facebook" /> <br></br>
                Facebook
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }} className="col">
              <button onClick={()=>this.addWidget(<LinkedInFrame />, 'LinkedInFrame')} className="btn btn-dark btn-block">
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
              <button onClick={()=>this.addWidget(<YoutubeFrame />, 'YoutubeFrame')} className="btn btn-dark btn-block">
                <Icon style={{ fontSize: "30px" }} type="menu-fold" type="youtube" />
                <br></br>
                Youtube
              </button>
            </div>
          </div>
          <div className="row">
            <div style={{ textAlign: "center", marginTop: "20px", borderStyle: "solid", borderLeft: "None", borderTop: "none", borderBottom: "none" }} className="col">
              <button onClick={()=>this.addWidget(<GoogleFrame/>, 'GoogleFrame')} className="btn btn-dark btn-block">
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