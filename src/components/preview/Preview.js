"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button, FormControl, Select, MenuItem, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DisplayResume from './DisplayResume'
import DisplayClassic from './DisplayClassic'
import DisplayTwoColResume from './DisplayTwoColResume'
import ResumeUploader from '../uploadjson/ResumeUploader'

// Fun template names and descriptions
const TEMPLATES = {
  CLEAN: {
    id: 'CLEAN',
    name: '✨ The Clean AF',
    description: 'Minimalist vibes only. No drama, just pure professional aesthetics.'
  },
  TWO_COLUMN: {
    id: 'TWO_COLUMN',
    name: '💅 The Side Hustle',
    description: 'Split personality? This two-column slay is for you!'
  },
  CLASSIC: {
    id: 'CLASSIC',
    name: '🎩 The OG Classic',
    description: 'Because sometimes you need to keep it traditionally fire.'
  }
};

function Preview() {
  const resumeData = useSelector((state) => state.resume)
  const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES.CLEAN.id)

  const renderSelectedTemplate = () => {
    switch(selectedTemplate) {
      case TEMPLATES.CLEAN.id:
        return <DisplayResume resumeData={resumeData} />
      case TEMPLATES.TWO_COLUMN.id:
        return <DisplayTwoColResume />
      case TEMPLATES.CLASSIC.id:
        return <DisplayClassic />
      default:
        return <DisplayResume resumeData={resumeData} />
    }
  }

  return (
    <Box sx={{ p: 3 }}>
    <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {JSON.stringify(resumeData, null, 2)}
          </pre>
      <ResumeUploader/>
      
      {/* Spicy Template Selector */}
      <Box sx={{ 
        mb: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 2,
        // backgroundColor: '#f8f9fa',
        borderRadius: 2,
        p: 3
      }}>
        <Typography variant="h5" sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          fontWeight: 'bold',
          color: '#1a1a1a'
        }}>
          <AutoAwesomeIcon /> Pick Your Vibe
        </Typography>
        
        <FormControl sx={{ minWidth: 300 }}>
          <Select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            sx={{
              backgroundColor: 'white',
              '& .MuiSelect-select': {
                py: 1.5,
              }
            }}
          >
            {Object.values(TEMPLATES).map((template) => (
              <MenuItem 
                key={template.id} 
                value={template.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  py: 1
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {template.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {template.description}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box 
        sx={{
          
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
        {renderSelectedTemplate()}
      </Box>
    </Box>
  )
}

export default Preview