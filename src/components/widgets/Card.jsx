import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
import ContentEditable from "react-contenteditable";

const { Meta } = Card;
class Card1 extends Component {
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
        var imageArray = [
            "https://rukminim1.flixcart.com/image/416/416/jwpa8i80/computer/f/x/t/dell-na-2-in-1-laptop-original-imafhbhzvzzefzvw.jpeg?q=70",
            "https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-wasap-5390-307x170.png",
        ]
        var rand = imageArray[Math.floor(Math.random() * imageArray.length)];
        return (
            <React.Fragment>
                <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={<img alt="example" height="250vh" src={rand} />}
                >
                    <Meta title="DELL XPS 13" description="www.dell.com" />
                    <ContentEditable
                        html={this.state.html} // innerHTML of the editable div
                        disabled={false} // use true to disable edition
                        onChange={this.handleChange} // handle innerHTML change
                        ref={this.textInput}
                    />
                </Card>
            </React.Fragment>

        )
    }
}
export default Card1