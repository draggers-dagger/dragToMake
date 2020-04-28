import React from 'react';
import { Timeline } from 'antd';

const Timeline1 = (props) => {
    return (
        <Timeline style={{ width:"100%" , height:"100%"}} mode="alternate">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            
            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            
        </Timeline>
    )
}

export default Timeline1
