import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';

class Slideshow extends Component {

    render() {
        return (
            <React.Fragment>
                <Carousel autoplay>
                    <div>
                        <img style={{ zIndex: "-1", position: 'relative' }} src="https://i.dell.com/sites/csimages/Banner_Imagery/all/2337-hub-banner-2800x839-Serenity.jpg" ></img>
                    </div>
                    <div>
                        <img style={{ zIndex: "-1" }} src="https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2354-g3-code-vein-2800x839.jpg" ></img>
                    </div>
                    <div>
                        <img style={{ zIndex: "-1" }} src="https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/2361-awaurorar9-2800x839.jpg" ></img>
                    </div>
                    {/* <div>
                        <h3>4</h3>
                    </div> */}
                </Carousel>
            </React.Fragment>

        )
    }
}
export default Slideshow