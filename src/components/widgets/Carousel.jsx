import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd';

class Slideshow extends Component {

  render() {
    var style = {
      width: "100%",
      height: "100%"
    }
    return (
      // <div style={{height:"100%", width:"100%"}}>
      <Carousel style={{ height: "auto", width: "80vw" }} autoplay>
        <div>
          <img style={style} src="https://i.dell.com/sites/csimages/Banner_Imagery/en/in-dhs-pc-exch-965x220.jpg" />
        </div>
        <div>
        <img style={style} src="https://infomeuae.com/wp-content/uploads/2017/02/dell-banner-1.jpg" />
        </div>
        <div>
        <img style={style} src="https://blog.pcm.com/wp-content/uploads/2018/06/Dell-blog-banner.jpg" />
        </div>
      </Carousel>
      // </div>

    )
  }
}
export default Slideshow