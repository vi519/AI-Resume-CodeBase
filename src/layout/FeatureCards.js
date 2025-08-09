// pages/index.js
import React from 'react';
import CardWrapper from './CardWrapper'; // corrected import path
import { Box, Grid } from '@mui/material';

export default function FeatureCards() {
  const cardList = [
    {
      title: 'AI Job Description Matching',
      description: 'Use AI to tailor your resume to any job posting',
      buttonLabel: 'Get Started',
    },
    {
      title: 'Live Resume Preview',
      description: 'Create and preview your resume in real time',
      buttonLabel: 'Learn More',
    },
    {
      title: 'PDF Download',
      description: 'Download professional-quality PDFs with a click',
      buttonLabel: 'Read More',
    },
    {
      title: 'Get Live Rating of Resume',
      description: 'Get your rating of resume a/c to Job description',
      buttonLabel: 'Get Started',
    },
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
