import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadResume, resetState } from '@/redux/resumeSlice';
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
  const fileInputRef = useRef(null);

  // Add effect to clear local state when resumeData is reset
  useEffect(() => {
    // Check if resumeData has been reset to initial state
    if (!resumeData?.personalDetails?.firstName && 
        !resumeData?.personalDetails?.lastName) {
      setError('');
      setFileName('');
    }
  }, [resumeData]);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    debugger
    if (!file) return;

    if (file.type !== 'application/json') {
      setError('Please upload a valid JSON file.');
      return;
    }

    try {
      const text = await file.text();
      const uploadedData = JSON.parse(text);

      if (typeof uploadedData !== 'object') {
        setError('Invalid JSON format');
        return;
      }

      // First reset the state
      await dispatch(resetState());

      // Then load the new data
      await dispatch(loadResume(uploadedData));

      setError('');
      setFileName(file.name);

    } catch (err) {
      console.error('Upload error:', err);
      setError('Error parsing JSON file. Please check the format.');
      setFileName('');
    }
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

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';  // Clear the input
      fileInputRef.current.click();
    }
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
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadFileIcon />}
            onClick={handleFileSelect}  // Changed to use handleFileSelect
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
            <input 
              type="file" 
              accept=".json" 
              hidden 
              ref={fileInputRef}
              onChange={handleUpload} 
            />
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
