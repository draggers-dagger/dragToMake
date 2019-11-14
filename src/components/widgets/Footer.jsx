import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');
const { Meta } = Card;
class Footer extends Component {

    render() {
        // var style = { border: "none", overflow: "hidden", position: "relative", zIndex: "-1", width: "800px", height: "500px" }
        return (
            <React.Fragment >

<footer style={{backgroundColor: '#007db8', height:"100%" ,width:"100%"}} class="page-footer font-small blue">

<div class="footer-copyright text-center py-3">© 2018 Copyright:
  {/* <a style={{textColo}} href="https://mdbootstrap.com/education/bootstrap/">  */}
  <p>Dell.com</p>
  {/* </a> */}
</div>

</footer>
            </React.Fragment>

        )
    }
}
export default Footer