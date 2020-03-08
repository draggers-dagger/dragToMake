import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import EditingModal from './Modal' 
import CardEdit from '../EditComponents/Card.edit'
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
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
                {/* <Edit/> */}
                {/* <Icon style={{ pointer: "cursor" }} type="edit" /> &nbsp;
                <Icon onClick={this.handleDelete} type="delete" /> &nbsp; */}
                {/* <Button onClick={this.handleDelete} icon={<SmileTwoTone  />} /> */}
                <EditingModal
                    form={<CardEdit/>}
                />
                <DeleteOutlined  onClick={this.handleDelete}/>
            </div>
        )
    }
}

export default ConsoleWidget