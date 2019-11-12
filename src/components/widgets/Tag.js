import React from 'react';
import { Tag } from 'antd';

const Tag1 = (tag) => {
    return (
        <Tag closable style={{  textAlign: "center" }} color="green" key={tag}>
            SOMETHING
        </Tag>
    )
}

export default Tag1
