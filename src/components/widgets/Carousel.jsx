import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';

class Slideshow extends Component {

    render() {
        return (
            <React.Fragment>
                <Carousel autoplay>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </React.Fragment>

        )
    }
}
export default Slideshow