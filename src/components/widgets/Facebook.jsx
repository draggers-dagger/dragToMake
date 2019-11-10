import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');
const { Meta } = Card;
class FacebookFrame extends Component {

    render() {
        var style = {border:"none", overflow:"hidden", position: "relative", zIndex: "-1"}
        return (
            <React.Fragment>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdellindia%2F%3Fbrand_redir%3D393364824033060&tabs=timeline&width=800&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2005389119495006" width="800" height="500" style={style} scrolling="no" allow="encrypted-media"></iframe>
            </React.Fragment>

        )
    }
}
export default FacebookFrame