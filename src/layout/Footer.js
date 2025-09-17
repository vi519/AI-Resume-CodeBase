import { COPY_WRITE, FOOTER_STOPPER, FOOTER_SUBTEXT, FOOTER_TEXT, START_BUILDING } from '@/constants/layoutconstants'
import React from 'react'
import "../styles/layout/footer.css"
import { Button } from '@mui/material'
import { currentYear } from '@/utils/utils'
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <div className='ai-cv-footer-section'>
        <div className='ai-cv-footer-footertext'>{FOOTER_TEXT}</div>
        <div className='ai-cv-footer-footersubtext'>{FOOTER_SUBTEXT}</div>
        <div className='ai-cv-btn'>
          <nav>
            <Link href="/portal">
              <Button 
                variant="contained"
                sx={{ 
                  backgroundColor: 'oklch(60.9% 0.126 221.723)', 
                  '&:hover': { 
                    backgroundColor: 'oklch(52% 0.105 223.128)' 
                  } 
                }}
              >
                {START_BUILDING}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
      <div className='ai-cv-foot-stopper'>
        <div>{COPY_WRITE}</div>
        <div>{currentYear}</div>
        <div>{FOOTER_STOPPER}</div>
      </div>
    </div>
  )
}

export default Footer