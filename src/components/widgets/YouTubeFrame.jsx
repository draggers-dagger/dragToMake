import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');
const { Meta } = Card;
class YoutubeFrame extends Component {

    render() {
        var style = { border: "none", margin:"2vh", overflow: "hidden", position: "relative", zIndex: "-1", width: "100%", height: "100%" }
        return (
            <React.Fragment>
                <iframe style={style}
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </React.Fragment>

        )
    }
}
export default YoutubeFrame