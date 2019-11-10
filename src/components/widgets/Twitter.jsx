import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');
const { Meta } = Card;
class TwitterFrame extends Component {

    render() {
        var style = { border: "none", overflow: "hidden", position: "relative", zIndex: "-1", width: 300, height: "500px" }
        return (
            <React.Fragment>
                <iframe style={style}
                    src="https://twitframe.com/show?url=https://twitter.com/Dell/status/1192962006925623301"></iframe>
            </React.Fragment>

        )
    }
}
export default TwitterFrame