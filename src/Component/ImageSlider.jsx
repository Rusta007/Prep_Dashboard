import React from 'react'
import '../Style/ImageSlider.css'
export default function ImageSlider() {
  return (
    <div className='heading-slide'>
        <h1>What We Offer</h1>
        <p>We teach students the strategic approach to solve coding problems for cracking the placement interviews effortlessly.</p>
   
            <div className='group-images'>
             
              <img src="../images/Mask Group 4.png" alt="" className='group-images1' />
                        
                <img src="../images/Mask Group 5.png" alt="" className='group-images2' style={{margin:'0px 5em'}} />
                <img src="../images/Mask Group 6.png" alt="" className='group-images1' />
            </div>
        </div>
  )
}
