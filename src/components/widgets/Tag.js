import React from 'react';
import { Tag } from 'antd';

const Tag1 = (tag) => {
    return (
        <Tag closable style={{  textAlign: "center" , width:"100%" , height:"100%"}} color="green" key={tag}>
            SOMETHING
        </Tag>
    )
}

export default Tag1
