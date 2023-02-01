import React from 'react'
import '../Style/prepPoster.css'
// import AMPARENT from './AMPARENT'
import Midflex from './Midflex'

export default function PrepPoster() {
  return (
    <>
     <div className="banner-port">
          <div>
          <img src="../images/banner404.png" alt="" className='bannerImages'/>
          </div>
          <div>
          <div className="aboutprep">
            <h1 className="our-vision">Our Vision <span id="and-oprt">&</span> Mission</h1>
            <p className="paragraph">At PrepBytes, our entire team strongly believes in setting benchmarks for our students whilst upgrading their coding proficiency at a higher intellectual level. Our core motto is to promote the growing employability scope in the IT sector & make students aware of the multiple career opportunities in this domain. We're always there for our students starting from providing informative study materials, taking mock tests & interviews to resolving their queries. We strive to achieve 100% placement success.</p>
        </div>
        <div className="poster-main">
            <div className='college-blog'>
                <img src="../images/person.png" alt="" className="image-poster"/>
                <div style={{paddingLeft:'20px'}}>
                  <h2 style={{color:'#616161', margin:'0'}}>10K+</h2>
                  <span style={{color:'#616161', margin:'0'}} className='name-blog'>Students Enrolled</span>
                  </div>
            </div>
            <hr/>
            <div className='college-blog'>
                <img src="../images/college.png" alt="" className="image-poster"/>
                <div style={{paddingLeft:'20px'}}>
                  <h2 style={{color:'#616161', margin:'0'}}>1000+</h2>
                  <span style={{color:'#616161', margin:'0'}} className='name-blog'>Reach in Colleges</span>
                  </div>
            </div>
            <hr/>
            <div className='college-blog college-blog3'>
                <img src="../images/cap.png" alt="" className="image-poster"/>
                <div style={{paddingLeft:'20px'}}>
                  <h2 style={{color:'#616161', margin:'0'}}>10K+</h2>
                  <span style={{color:'#616161', margin:'0'}} className='name-blog'>Hours of learning</span>
                  </div>
            </div>
            <hr/>
            <div className='college-blog college-blog3 '>
                <img src="../images/social-icon.png" alt="" className="image-poster"/>
                <div style={{paddingLeft:'20px'}}>
                  <h2 style={{color:'#616161', margin:'0'}}>150K+</h2>
                  <span style={{color:'#616161', margin:'0'}} className='name-blog'>Social Community</span>
                  </div>
            </div>
          
        </div>
          </div>
    </div>
    
      <img src="../images/circle.png" alt="" srcset="" className='circle-image' />
      
    
    
    </>
  )
  
}
