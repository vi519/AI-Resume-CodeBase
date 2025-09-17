"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import DisplayResume from './DisplayResume'
import ResumeUploader from '../uploadjson/ResumeUploader'

function Preview() {
  const resumeData = useSelector((state) => state.resume)

  const handleDownloadJSON = () => {
    const jsonString = JSON.stringify(resumeData, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = `resume-data-${new Date().toISOString()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(href)
  }

  return (

    <>
  
  <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {/* {JSON.stringify(resumeData, null, 2)} */}
          </pre>
    <Box sx={{ p: 3 }}>
      {/* <Button 
        variant="contained" 
        startIcon={<DownloadIcon />}
        onClick={handleDownloadJSON}
        sx={{ mb: 2 }}
      >
        Download Resume JSON
      </Button> */}
      <ResumeUploader/>
      <Box 
        component="pre"
        sx={{
          bgcolor: 'background.paper',
          p: 2,
          borderRadius: 1,
          overflow: 'auto',
          border: '1px solid',
          borderColor: 'divider',
          '&:hover': {
            boxShadow: 1
          }
        }}
      >

        <DisplayResume resumeData={JSON.stringify(resumeData, null, 2)} />
     
      </Box>
    </Box>
    </>
    
    
  )
}

export default Preview