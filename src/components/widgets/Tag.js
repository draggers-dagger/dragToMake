import React from 'react';
import { Tag } from 'antd';

const Tag1 = (tag) => {
    var imageArray = [
        {
            color: 'magenta',
            title: 'Gaming Series'
        },
         {
            color: 'green',
            title: 'PC'
        },
        {
            color: 'blue',
            title: 'Professional Series'
        }
    ]
    var rand = imageArray[Math.floor(Math.random() * imageArray.length)];
    return (
        <Tag closable style={{  textAlign: "center" , width:"100%" , height:"100%"}} color={rand.color} key={tag}>
            {rand.title}
        </Tag>
    )
}

export default Tag1
