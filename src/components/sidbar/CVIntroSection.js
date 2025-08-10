import { headline_1, headline_2, headline_3 } from '@/constants/sidebarconstant'
import React from 'react'
import "@/styles/components/cvintrosection.css"
function CVIntroSection() {
  return (
    <div>
    <div className='ai-cv-cvintrosection'>
      <div className='ai-cv-headline-1'>{headline_1}</div>
      <div className='ai-cv-headline-2'>{headline_2}</div>
    </div>
    <div className='ai-cv-headline3'>{headline_3}</div>
    </div>
  )
}

export default CVIntroSection