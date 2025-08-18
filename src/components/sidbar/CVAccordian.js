import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@/styles/components/cvaccordian.css";

import {
  cnc,
  education,
  experience,
  personaldetails,
  projects,
  skills,
  professionallinks,
  achievements
} from '@/constants/cvaccordian';

import PersonalDetails from './content/PersonalDetails';
import SocialNetworkLinks from './content/SocialNetworkLinks';
import Experience from './content/Experience';
import Skills from './content/Skills';
import Education from './content/Education';
import Projects from './content/Projects';
import Certifications from './content/Certifications';
import Achievements from './content/Achievements';

function CVAccordian() {
  const accordionItems = [
    { title: personaldetails, component: <PersonalDetails /> },
    { title: professionallinks, component: <SocialNetworkLinks /> },
    { title: experience, component: <Experience /> },
    { title: education, component: <Education /> },
    { title: skills, component: <Skills /> },
    { title: projects, component: <Projects /> },
    { title: cnc, component: <Certifications /> },
    { title: achievements, component: <Achievements /> }
  ];

  return (
    <div className='ai-cv-accordian'>
      {accordionItems.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="span">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails >{item.component}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CVAccordian;
