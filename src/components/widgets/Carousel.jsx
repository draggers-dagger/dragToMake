import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';

class Slideshow extends Component {

    render() {
        return (
            <React.Fragment>
                <Carousel autoplay>
                    <div>
                        <img style={{zIndex: "-1", position: 'relative'}} src="https://images.unsplash.com/photo-1426523038054-a260f3ef5bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80" ></img>
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