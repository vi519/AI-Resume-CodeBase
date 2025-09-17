'use client'
import Preview from "@/components/preview/Preview";
import CVIntroSection from "@/components/sidbar/CVIntroSection";
import CVSetup from "@/components/sidbar/CVSetup";
import CVAccordian from "@/components/sidbar/CVAccordian";
import { useDispatch } from 'react-redux';
import { resetState } from '@/redux/resumeSlice';
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "../../styles/components/portal.css";

export default function Portal() {
  const dispatch = useDispatch();

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
      dispatch(resetState());
    }
  };

  return (
    <div className="ai-cv-portal">
      <div className="ai-cv-mysidebarpages">
       
        <CVIntroSection/>
        <Button
          variant="outlined"
          color="error"
          startIcon={<RestartAltIcon />}
          onClick={handleReset}
          sx={{
            m: 2,
            width: '95%',
            '&:hover': {
              backgroundColor: '#ff1744',
              color: 'white'
            }
          }}
        >
          Reset All Data
        </Button>
        <CVSetup/>
        <CVAccordian/>
      </div>
      <div className="ai-cv-previewpages">
        <Preview/>
      </div>
    </div>
  );
}