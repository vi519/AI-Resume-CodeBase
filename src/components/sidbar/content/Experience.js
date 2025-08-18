"use client"
import { Button, InputAdornment, TextField, Box, Checkbox, IconButton, FormControlLabel } from '@mui/material';
import React, { useState } from 'react';
import "@/styles/components/experience.css";
import { addExp, addMore } from '@/constants/sidebarconstant';
import WorkIcon from '@mui/icons-material/Work';
import dayjs from "dayjs";
import DoubleDatePickerWrapper from '@/wrappper/DoubleDatePickerWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { addExperience, deleteExperience } from '@/redux/resumeSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import TitleIcon from '@mui/icons-material/Title';
function Experience() {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.resume.experience);
  
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    current: false,
    description: '',
    additionalNotes: '',
    startDate: dayjs(),
    endDate: dayjs()
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    dispatch(addExperience({
      id: Date.now().toString(),
      ...formData,
      startDate: formData.startDate.format("YYYY-MM-DD"),
      endDate: formData.endDate.format("YYYY-MM-DD")
    }));
    // Reset form
    setFormData({
      jobTitle: '',
      companyName: '',
      location: '',
      current: false,
      description: '',
      additionalNotes: '',
      startDate: dayjs(),
      endDate: dayjs()
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteExperience(id));
  };

  return (
    <div>
   

      <Box className="ai-cv-experience-textbox">
        <TextField
          label="Job Title"
          variant="standard"
          fullWidth
          value={formData.jobTitle}
          onChange={(e) => handleInputChange('jobTitle', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TitleIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <Box className="ai-cv-experience-textbox">
        <TextField
          label="Company Name"
          variant="standard"
          fullWidth
          value={formData.companyName}
          onChange={(e) => handleInputChange('companyName', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WorkIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <Box className="ai-cv-experience-textbox">
        <TextField
          label="Location"
          variant="standard"
          fullWidth
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.current}
            onChange={(e) => handleInputChange('current', e.target.checked)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Currently Working"
        sx={{
          '& .MuiFormControlLabel-label': {
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize:"1rem"
          }
        }}
      />

      <Box className="ai-cv-experience-textbox">
        <TextField
          label="Work Description"
          multiline
          rows={2}
          variant="standard"
          fullWidth
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <div style={{ maxWidth: "500px", margin: "auto", paddingTop:"16px" }}>
        <DoubleDatePickerWrapper
          startDate={formData.startDate}
          endDate={formData.endDate}
          onStartChange={(date) => handleInputChange('startDate', date)}
          onEndChange={(date) => handleInputChange('endDate', date)}
          startLabel="From"
          endLabel="To"
        />
      </div>

      {/* Display existing experiences */}
      {experiences.map((exp) => (
        <Box 
          key={exp.id} 
          sx={{ 
            mt: 2, 
            p: 2, 
            border: '1px solid #ddd', 
            borderRadius: 1,
            maxWidth: "500px",
            margin: "20px auto",
            position: 'relative',
            padding:"4px 16px"  // Add this for absolute positioning of delete button
          }}
        >
          <IconButton
            onClick={() => handleDelete(exp.id)}
            sx={{
              position: 'absolute',
              right: 4,
              top: 4,
              color: 'error.main'
            }}
          >
            <DeleteIcon />
          </IconButton>
          <h3>{exp.jobTitle} at {exp.companyName}</h3>
          {/* <p>{exp.location}</p>
          <p>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
          <p>{exp.description}</p> */}
        </Box>
      ))}

<div className="ai-cv-experience-content">
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth
          onClick={handleSubmit}
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
          {addExp}
        </Button>
      </div>
    </div>
  );
}

export default Experience;
