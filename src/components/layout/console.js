import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import ConsoleWidget from './consoleWidget'
class Console extends Component {

    handleWidget = () => {
        return this.props.AllWidget.map(Widget =>

            <ConsoleWidget handleDeleteWidget={this.props.handleDeleteWidget} key={Widget.id} Widget={Widget}></ConsoleWidget>
        )
    }

    render() {
        return (
            <div>
                <div className="console-btn">
                    <Button data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" type="primary" style={{ padding: "0 40px" }} >
                        console
                </Button>

                </div>
                <div class="collapse" id="collapseExample" className="console-body">
                    <center style={{ color: "white" }}> Click console to close this pane </center>
                    {this.handleWidget()}
                    <br></br>

                </div>
            </div>

        )
    }
}

export default Console