"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCertification, deleteCertification } from '@/redux/resumeSlice';
import { TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LinkIcon from '@mui/icons-material/Link';
import dayjs from 'dayjs';
import DoubleDatePickerWrapper from '@/wrappper/DoubleDatePickerWrapper';

function Certifications() {
  const dispatch = useDispatch();
  const certifications = useSelector((state) => state.resume.certifications);

  const [formData, setFormData] = useState({
    name: '',
    issuingOrganization: '',
    issueDate: dayjs(),
    expiryDate: dayjs(),
    credentialLink: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    dispatch(addCertification({
      id: Date.now().toString(),
      ...formData,
      issueDate: formData.issueDate.format('YYYY-MM-DD'),
      expiryDate: formData.expiryDate.format('YYYY-MM-DD')
    }));
    // Reset form
    setFormData({
      name: '',
      issuingOrganization: '',
      issueDate: dayjs(),
      expiryDate: dayjs(),
      credentialLink: ''
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteCertification(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, margin: '0 auto' }}>
        <TextField
          label="Certification Name"
          variant="standard"
          fullWidth
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WorkspacePremiumIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Issuing Organization"
          variant="standard"
          fullWidth
          value={formData.issuingOrganization}
          onChange={(e) => handleInputChange('issuingOrganization', e.target.value)}
        />

        <TextField
          label="Credential Link"
          variant="standard"
          fullWidth
          value={formData.credentialLink}
          onChange={(e) => handleInputChange('credentialLink', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon />
              </InputAdornment>
            ),
          }}
        />

        <DoubleDatePickerWrapper
          startDate={formData.issueDate}
          endDate={formData.expiryDate}
          onStartChange={(date) => handleInputChange('issueDate', date)}
          onEndChange={(date) => handleInputChange('expiryDate', date)}
          startLabel="Issue Date"
          endLabel="Expiry Date"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
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
          Add Certification
        </Button>
      </Box>

      {certifications.map((cert) => (
        <Box
          key={cert.id}
          sx={{ 
            mt: 2,
            px: 1, // 8px left and right
            py: 0.25, // 2px top and bottom
            border: '1px solid #ddd', 
            borderRadius: 1,
            maxWidth: "500px",
            margin: "20px auto",
            position: 'relative'
          }}
        >
          <IconButton
            onClick={() => handleDelete(cert.id)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'error.main'
            }}
          >
            <DeleteIcon />
          </IconButton>
          <h3   style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '90%' // leave space for delete icon
      }}>{cert.name}</h3>
        </Box>
      ))}
    </div>
  );
}

export default Certifications;