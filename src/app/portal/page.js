'use client'
import dynamic from 'next/dynamic'
import { useDispatch } from 'react-redux';
import { resetState } from '@/redux/resumeSlice';
import { Button } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "../../styles/components/portal.css";

// Dynamically import components with no SSR
const Preview = dynamic(() => import("@/components/preview/Preview"), { ssr: false })
const CVIntroSection = dynamic(() => import("@/components/sidbar/CVIntroSection"), { ssr: false })
const CVSetup = dynamic(() => import("@/components/sidbar/CVSetup"), { ssr: false })
const CVAccordian = dynamic(() => import("@/components/sidbar/CVAccordian"), { ssr: false })

export default function Portal() {
  const dispatch = useDispatch();

  const handleReset = () => {
    // Check if window is defined (client-side only)
    if (typeof window !== 'undefined' && window.confirm('Are you sure you want to reset all data? This cannot be undone.')) {
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