import React from 'react';
import { Tag } from 'antd';

const Tag1 = (tag) => {
    return (
        <Tag closable style={{ width: '100%', textAlign: "center" }} color="green" key={tag}>
            SOMETHING
        </Tag>
    )
}

export default Tag1
