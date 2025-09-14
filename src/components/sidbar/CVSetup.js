import { Button } from '@mui/material'
import React from 'react'
import "@/styles/components/cvsetup.css"
import RoundedButton from '@/wrappper/RoundedButton'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ClearIcon from '@mui/icons-material/Clear';

function CVSetup() {
  return (
    <div>
    {/* <div className='ai-cv-settingheading'>Setting</div> */}
    <div className='ai-cv-cvsetup'>
    
    <div >
      <RoundedButton >
       <RestartAltIcon/>Reset
      </RoundedButton>
    </div>
    <div>
      <RoundedButton >
      <ClearIcon/> Clear
      </RoundedButton>
    </div>
        
    </div>
    </div>
  )
}

export default CVSetup