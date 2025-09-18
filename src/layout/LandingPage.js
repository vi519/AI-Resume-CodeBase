import React from 'react'
import Image from 'next/image' // ✅ missing import
import "@/styles/layout/layout.css"
import githubpng from "@/assets/github.svg"
import IntroPage from './IntroPage'
import { ABOUT_ME, AI_CV, FEATURES, HOW_IT_WORKS } from '@/constants/layoutconstants'
import FeatureCards from './FeatureCards'
import Footer from './Footer'
import Link from 'next/link'

function LandingPage() {
  return (
    <div className="ai-cv-landingsection">
      <div className="ai-cv-landingpage">
        <div className="ai-cv-leftheading">{AI_CV}</div>
        <div className="ai-cv-rightheading">
          <div>
            <Image src={githubpng} alt="GitHub" width={20} height={20} />
          </div>
          {/* <div>{HOW_IT_WORKS}</div> */}
          <div style={{ }}><Link href="/aboutme" style={{textDecoration:"none",color:"#6bafb3"}}>{ABOUT_ME}</Link></div>
          
        </div>
      </div>
      <div className='ai-cv-intropage'><IntroPage/></div>

      <div>
<div className='ai-cv-feature-section'>{FEATURES}</div>
      <div className='ai-cv-feature-cards'><FeatureCards/></div>
    </div>

    <div><Footer/></div>
    </div>
  )
}

export default LandingPage
