import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');

class Bargraph extends Component {

    render() {
        let configStoreDivison = {
            title: {
                text: 'Top Sales person'
              },
          
              subtitle: {
                text: 'Sales'
              },
          
              xAxis: {
                categories: salesmanName
              },
            series: [{
                name: 'Skill Set',
                type: 'column',
                colorByPoint: true,
                data: [
                    {
                        name: "NodeJs",
                        y: 20,
                    },
                    {
                        name: "ReactJs",
                        y: 15,
                    },
                    {
                        name: "Laravel",
                        y: 5,
                    },
                    {
                        name: "AngularJs",
                        y: 10
                    },
                    {
                        name: "Flask",
                        y: 10
                    },
                    {
                        name: "Mogoose",
                        y: 10
                    },
                    {
                        name: "Selenium",
                        y: 10
                    },
                    {
                        name: "ExpressJs",
                        y: 10
                    },
                    {
                        name: "Animation",
                        y: 10
                    },

                ]
            }]
        }
        return (
            <React.Fragment>
                <ReactHighcharts config={configStoreDivison} ref="chart"></ReactHighcharts>
            </React.Fragment>

        )
    }
}
export default Bargraph