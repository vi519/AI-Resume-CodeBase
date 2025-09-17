// pages/index.js
import React from 'react';
import CardWrapper from './CardWrapper'; // corrected import path
import { Box, Grid } from '@mui/material';

export default function FeatureCards() {
  const cardList = [
    {
      title: 'Live Resume Preview',
      description: 'Create and preview your resume in real time',
      buttonLabel: 'Learn More',
    },
    {
      title: 'Try Different Template',
      description: 'Gen Gold/Bold might like it',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Upload Json of Resume',
      description: 'For easy access of your history resume',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Download Json of Resume',
      description: 'For your backlogs',
      buttonLabel: 'Get Started',
    },
    {
      title: 'PDF Download',
      description: 'Download professional-quality PDFs with a click',
      buttonLabel: 'Read More',
    },
    // {
    //   title: 'Get Live Rating of Resume',
    //   description: 'Get your rating of resume a/c to Job description',
    //   buttonLabel: 'Get Started',
    // },
  ];

  return (
    <div className='ai-cv-card-dist'>

   
<Box sx={{ p: 4 }}>
  <Grid container spacing={3} justifyContent="center">
    {cardList.map((card, index) => (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <CardWrapper data={card} />
      </Grid>
    ))}
  </Grid>
</Box>

    </div>
  );
}
