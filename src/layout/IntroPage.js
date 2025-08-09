import { GET_STARTED, subTagline, subTagline1, tagline, tagline1 } from '@/constants/layoutconstants'
import React from 'react'
import "../styles/layout/intropage.css"
import { Button } from '@mui/material'
import FeatureCards from './FeatureCards'
import Link from 'next/link'

function IntroPage() {
  return (
    <div className='ai-cv-intro-section'>
    <div className='ai-cv-intro-tagline'>{tagline}
        <div className='ai-cv-intro-tagline1'>
        <div >{tagline1}</div>
        </div>
   
    </div>
  
   
    <div className="ai-cv-intro-subtagline">{subTagline}
    <div className='ai-cv-intro-tagline1'>
    <div>{subTagline1}</div>
        </div>
    </div>
    
    <div className='ai-cv-btn'>
    <nav>
        <Link href="/portal"><Button variant="contained" href="#contained-buttons"
     sx={{ backgroundColor: 'oklch(60.9% 0.126 221.723)', '&:hover': { backgroundColor: 'oklch(52% 0.105 223.128)' } }}>
     {GET_STARTED}
      </Button></Link>
        {/* <Link href="/contact">Contact</Link> */}
      </nav>
       </div>

 

    </div> )
}

export default IntroPage