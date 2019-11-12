import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';

class Slideshow extends Component {

    render() {
        return (
            // <div style={{height:"100%", width:"100%"}}>
                <Carousel style={{height:"auto", width:"80vw"}} autoplay>
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
            // </div>

        )
    }
}
export default Slideshow