import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
import ContentEditable from "react-contenteditable";

const { Meta } = Card;
class Heading extends Component {
    constructor() {
        super();
        this.state = { html: "Edit <b>me</b> !" };
        this.textInput = React.createRef();
    }
    handleChange = evt => {
        this.setState({ html: evt.target.value });
        console.log(this.state.html)
    };

    render() {
        
        return (
            <React.Fragment>
                <ContentEditable
                    html={this.state.html} // innerHTML of the editable div
                    disabled={false} // use true to disable edition
                    onChange={this.handleChange} // handle innerHTML change
                    ref={this.textInput}
                />
            </React.Fragment>

        )
    }
}
export default Heading