import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadResume } from '@/redux/resumeSlice';
import {
  Button,
  Typography,
  Alert,
  Card,
  CardContent,
  Stack
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DownloadIcon from '@mui/icons-material/Download';
import html2pdf from 'html2pdf.js';

export default function ResumeUploader() {
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resume);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'application/json') {
      setError('Please upload a valid JSON file.');
      return;
    }

    setError('');
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const uploadedData = JSON.parse(e.target.result);
        if (!uploadedData.personalDetails || !uploadedData.education) {
          setError('Invalid resume format: Missing required fields.');
          return;
        }
        dispatch(loadResume(uploadedData));
      } catch (err) {
        setError('Error parsing JSON. Please check the file content.');
      }
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: [0.1, 0.1],
      filename: `${resumeData?.personalDetails?.firstName}_${resumeData?.personalDetails?.lastName}_Resume.pdf`,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: {
        scale: 3,
        useCORS: true,
        logging: false
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait',
        compress: false
      }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <Card
      sx={{
        maxWidth: '100%',
        p: 3,
        
        borderRadius: 3,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff'
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          textAlign="center"
          sx={{ fontWeight: 600, color: '#000' }}
        >
          Manage Resume Operations
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{
            mt: 3,
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          {/* Upload Button */}
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadFileIcon />}
            sx={{
              minWidth: 180,
              py: 1,
              fontWeight: 500,
              backgroundColor: '#000',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#000',
                border: '1px solid #000'
              }
            }}
          >
            Upload JSON
            <input type="file" accept=".json" hidden onChange={handleUpload} />
          </Button>

          {/* Download JSON Button */}
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              minWidth: 180,
              py: 1,
              fontWeight: 500,
              color: '#000',
              border: '1px solid #000',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff'
              }
            }}
          >
            Download JSON
          </Button>

          {/* Download PDF Button */}
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={downloadPDF}
            sx={{
              minWidth: 180,
              py: 1,
              fontWeight: 500,
              color: '#000',
              border: '1px solid #000',
              backgroundColor: '#fff',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff'
              }
            }}
          >
            Download PDF
          </Button>
        </Stack>

        {fileName && (
          <Typography
            variant="body2"
            sx={{ color: '#555', textAlign: 'center', mt: 2 }}
          >
            ✅ Uploaded: <strong>{fileName}</strong>
          </Typography>
        )}

        {error && (
          <Alert
            severity="error"
            sx={{
              mt: 2,
              backgroundColor: '#f5f5f5',
              color: '#000',
              border: '1px solid #ddd'
            }}
          >
            {error}
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
