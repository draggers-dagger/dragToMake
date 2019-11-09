import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');

class Bargraph extends Component {

    render() {
        let configTopSalePerson = {
            title: {
              text: 'Top Sales person'
            },
        
            subtitle: {
              text: 'Sales'
            },
        
            xAxis: {
              categories: ['ReactJS', 'AngularJS', 'NodeJS', 'AWS']
            },
        
            series: [{
              type: 'column',
              colorByPoint: true,
              data: [8, 4, 9, 7],
              showInLegend: false
            }]
          }
        return (
            <React.Fragment>
                <ReactHighcharts config={configTopSalePerson} ref="chart"></ReactHighcharts>
            </React.Fragment>

        )
    }
}
export default Bargraph