import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';
import "@/styles/components/cvaccordian.css"
import { cnc, education, experience, personaldetails, projects, skills,professionallinks, achievements} from '@/constants/cvaccordian';
import PersonalDetails from './content/PersonalDetails';
import SocialNetworkLinks from './content/SocialNetworkLinks';
import Experience from './content/Experience';
import Skills from './content/Skills';
import Education from './content/Education';
import Projects from './content/Projects';
import Certifications from './content/Certifications';
import Achievements from './content/Achievements';

function CVAccordian() {
  return (
    <div className='ai-cv-accordian'>
 <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{personaldetails}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <PersonalDetails/></AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >   
      <Typography component="span">{professionallinks}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <SocialNetworkLinks/></AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{experience}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Experience/></AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{education}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Education/> </AccordionDetails>
  </Accordion> 
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{skills}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Skills/></AccordionDetails>
  </Accordion> 
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{projects}</Typography>
    </AccordionSummary>
    <AccordionDetails>
<Projects/> </AccordionDetails>
  </Accordion> 
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{cnc}</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Certifications/> </AccordionDetails>
  </Accordion> 
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{achievements}</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Achievements/>
    </AccordionDetails>
  </Accordion> </div>
  )
}

export default CVAccordian