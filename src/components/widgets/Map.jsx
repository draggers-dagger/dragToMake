import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');
const { Meta } = Card;
class GoogleFrame extends Component {

    render() {
        var style = { border: "none",padding:"2vh", overflow: "hidden", position: "relative", zIndex: "-1", width:"100%", height: "100%" }
        return (
            <React.Fragment>
                {/* <div > */}
                    <iframe style={style}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9429302945623!2d77.71830901464357!3d12.97550201830383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae118ae3eb358b%3A0x771f01c9f351e9d3!2sDell%20International%20Services!5e0!3m2!1sen!2sin!4v1573428798851!5m2!1sen!2sin" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                        <a href="https://www.mapsdirections.info/en/custom-google-maps/">Create a custom Google Map</a> by
                        <a href="https://www.mapsdirections.info/en/">Measure area on map</a>
                    </iframe>
                {/* </div> */}
            </React.Fragment>
        )
    }
}
export default GoogleFrame