import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Icon, Card, Row, Col } from 'antd';
const ReactHighcharts = require('react-highcharts');

class Areagraph extends Component {

    render() {
        let configStoreDivison = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'area'
            },
            title: {
                text: 'Piechart'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Skill Set',
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
export default Areagraph