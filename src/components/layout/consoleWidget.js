import React, { Component } from 'react'
import { Icon, Button } from 'antd'

class ConsoleWidget extends Component {
    handleDelete =()=>{
        this.props.handleDeleteWidget(this.props.Widget)
    }
    render() {
        // console.log(this.props)
        return (
            <div style={{color:"white"}} class="item">
                {this.props.Widget.type}
                <br></br>
                <Icon style={{ pointer: "cursor" }} type="edit" /> &nbsp;
                <Icon onClick={this.handleDelete} type="delete" /> &nbsp;
            </div>
        )
    }
}

export default ConsoleWidget