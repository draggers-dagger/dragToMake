import React, { Component } from 'react'
import Piechart from '../components/widgets/piechart'
import Areagraph from '../components/widgets/Areagraph'
import Bargraph from '../components/widgets/Bargraph'
import Card from '../components/widgets/Card'
import Tag from '../components/widgets/Tag'
import Timeline from '../components/widgets/Timeline'
import Carousel from '../components/widgets/Carousel'
import Navbar from '../components/widgets/Navbar'
import FacebookFrame from '../components/widgets/Facebook'
import LinkedInFrame from '../components/widgets/Linkedin'
import YoutubeFrame from '../components/widgets/YouTubeFrame'
import Footer from '../components/widgets/Footer'
import TwitterFrame from '../components/widgets/Twitter'
import GoogleFrame from '../components/widgets/Map'

export const mapComponent = (type) => {
    switch (type) {
        case 'Navbar':
          return (
            <React.Fragment>
              <Navbar />
            </React.Fragment>
          )
        case 'Card':
          return (
            <React.Fragment>
              <Card />
            </React.Fragment>
          )
        case 'Carousel':
          return (
            <React.Fragment>
              <Carousel />
            </React.Fragment>
          )
        case 'Tag':
          return (
            <React.Fragment>
              <Tag />
            </React.Fragment>
          )
        case 'Timeline':
          return (
            <React.Fragment>
              <Timeline />
            </React.Fragment>
          )
        case 'Piechart':
          return (
            <React.Fragment>
              <Piechart />
            </React.Fragment>
          )
        case 'Areagraph':
          return (
            <React.Fragment>
              <Areagraph />
            </React.Fragment>
          )
        case 'Bargraph':
          return (
            <React.Fragment>
              <Bargraph />
            </React.Fragment>
          )
        case 'FacebookFrame':
          return (
            <React.Fragment>
              <FacebookFrame />
            </React.Fragment>
          )
        case 'YoutubeFrame':
          return (
            <React.Fragment>
              <YoutubeFrame />
            </React.Fragment>
          )
        case 'Footer':
          return (
            <React.Fragment>
              <Footer />
            </React.Fragment>
          )
        case 'TwitterFrame':
          return (
            <React.Fragment>
              <TwitterFrame />
            </React.Fragment>
          )
        case 'GoogleFrame':
          return (
            <React.Fragment>
              <GoogleFrame />
            </React.Fragment>
          )
      }
}