import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');
const { Meta } = Card;
class Card1 extends Component {

    render() {
        var imageArray = [
            "https://rukminim1.flixcart.com/image/416/416/jwpa8i80/computer/f/x/t/dell-na-2-in-1-laptop-original-imafhbhzvzzefzvw.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/416/416/jtyouq80/monitor/c/z/n/se2219hx-210-aqxy-dell-original-imaff6ejwrhwfafz.jpeg?q=70",
            "https://rukminim1.flixcart.com/image/416/416/cpu/u/y/f/dell-3250-original-imaemh6h4pcjnzjs.jpeg?q=70"
        ]
        var rand = imageArray[Math.floor(Math.random() * imageArray.length)];
        return (
            <React.Fragment>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" height="250vh" src={rand} />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </React.Fragment>

        )
    }
}
export default Card1