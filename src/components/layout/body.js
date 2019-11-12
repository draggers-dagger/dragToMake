import React, { Component } from 'react'
import { Rnd } from "react-rnd";
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxesArray: [],
        }
    }
    componentDidUpdate(prevProps) {

        console.log(this.props, "ytgytuf")
        if (prevProps.widget !== this.props.widget) {
            console.log(this.props.type, "widgettt")
            const components = {
                component: this.props.widget
            };
            const id = Date.now()
            this.setState({
                boxesArray: [...this.state.boxesArray, { id: id, title: this.props.widget, type: this.props.type }]
            })
        }
        // console.log(nextprops);
    }
    render() {
        const style = {
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center"
            // border: "solid 1px #ddd"
            // background: "#f0f0f0"
          };
        console.log(this.state)
        console.log(this.props)
        return (
            <div className="container-fluid" style={{ marginTop: "3%", height: "95%", overflowY: "scroll", overflowX: "hidden" }}>
                <div className="container-fluid" style={{ height: "200%" }}>
                    {this.state.boxesArray.map((item, i) => {
                        const { title } = item
                        return (
                            <Rnd
                                style={style}
                                default={{
                                    x: 0,
                                    y: 0,
                                    width: "auto",
                                    height: "auto"
                                }}
                                onDragStop={(e, d) => {
                                    this.setState({ x: d.x, y: d.y });
                                }}
                                onResize={(e, direction, ref, delta, position) => {
                                    this.setState({
                                        width: ref.offsetWidth,
                                        height: ref.offsetHeight,
                                        ...position
                                    });
                                }}
                            >
                                   {title}
                   
                            </Rnd>
                            
                             
                        )
                    })}
                </div>
            </div>
            // <div>
            //     {this.props.widget}
            // </div>
        )
    }
}

export default Body