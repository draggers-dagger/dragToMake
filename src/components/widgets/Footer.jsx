import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
import ContentEditable from "react-contenteditable";
const { Meta } = Card;
class Footer extends Component {
    constructor() {
        super();
        this.state = { html: "Edit <b>me</b> !" };
    }

    handleChange = evt => {
        this.setState({ html: evt.target.value });
        console.log(this.state.html)
    };
    render() {
        // var style = { border: "none", overflow: "hidden", position: "relative", zIndex: "-1", width: "800px", height: "500px" }
        return (
            <React.Fragment >

                <footer style={{ backgroundColor: '#007db8', height: "100%", width: "100%" }} class="page-footer font-small blue">

                    <div class="footer-copyright text-center py-3">© 2018 Copyright:
                        <p>Dell.com</p>
                    </div>
                    <ContentEditable
                        html={this.state.html} // innerHTML of the editable div
                        disabled={false} // use true to disable edition
                        onChange={this.handleChange} // handle innerHTML change
                    />
                </footer>
            </React.Fragment>

        )
    }
}
export default Footer