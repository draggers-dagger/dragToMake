import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';

class LinkedinFrame extends Component {

    render() {
        var style = {border:"none", overflow:"hidden", position: "relative", zIndex: "-1"}
        return (
            <React.Fragment>
                <iframe src="https://www.linkedin.com/company/dell/" width="800" height="500" style={style} scrolling="no" allow="encrypted-media"></iframe>
            </React.Fragment>

        )
    }
}
export default LinkedinFrame