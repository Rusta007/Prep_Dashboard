import React from 'react'
import Navbar from './PrepHeader'
import PrepPoster from './PrepPoster'
import Founder from './Founder'
import Poster2 from './Poster2'
import ImageSlider from './ImageSlider'
import Footer from './Footer'
// import Slide1 from './Slide1'
// import Slide2 from './Slide2'
// import Vision from './Vision'

const Home = () => {
  return (
   <>
   <Navbar/>
   <PrepPoster/>
   <Founder/>
   <Poster2/>
   <ImageSlider/>
   <Footer/> 
   </>
  )
}

export default Home