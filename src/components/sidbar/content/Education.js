"use client"
import { Button, InputAdornment, TextField, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import "@/styles/components/education.css";
import { addMore } from '@/constants/sidebarconstant';
import SchoolIcon from '@mui/icons-material/School';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from "dayjs";
import DoubleDatePickerWrapper from '@/wrappper/DoubleDatePickerWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { addEducation, deleteEducation } from '@/redux/resumeSlice';

function Education() {
  const dispatch = useDispatch();
  const educations = useSelector((state) => state.resume.education);
  
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    field: '',
    grade: '',
    location: '',
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
    dispatch(addEducation({
      id: Date.now().toString(),
      ...formData,
      startDate: formData.startDate.format("YYYY-MM-DD"),
      endDate: formData.endDate.format("YYYY-MM-DD")
    }));
    // Reset form
    setFormData({
      institution: '',
      degree: '',
      field: '',
      grade: '',
      location: '',
      startDate: dayjs(),
      endDate: dayjs()
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteEducation(id));
  };

  return (
    <div>
      <div className="ai-cv-education-content">
        <Button 
          variant="contained" 
          color="success" 
          fullWidth
          onClick={handleSubmit}
        >
          {addMore}
        </Button>
      </div>

      <Box className="ai-cv-education-textbox">
        <TextField
          label="Institution Name"
          variant="standard"
          fullWidth
          value={formData.institution}
          onChange={(e) => handleInputChange('institution', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <Box className="ai-cv-education-textbox">
        <TextField
          label="Degree"
          variant="standard"
          fullWidth
          value={formData.degree}
          onChange={(e) => handleInputChange('degree', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <Box className="ai-cv-education-textbox">
        <TextField
          label="Field of Study"
          variant="standard"
          fullWidth
          value={formData.field}
          onChange={(e) => handleInputChange('field', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <Box className="ai-cv-education-textbox">
        <TextField
          label="Grade/CGPA"
          variant="standard"
          fullWidth
          value={formData.grade}
          onChange={(e) => handleInputChange('grade', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <Box className="ai-cv-education-textbox">
        <TextField
          label="Location"
          variant="standard"
          fullWidth
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SchoolIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: "500px" }}
        />
      </Box>

      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <DoubleDatePickerWrapper
          startDate={formData.startDate}
          endDate={formData.endDate}
          onStartChange={(date) => handleInputChange('startDate', date)}
          onEndChange={(date) => handleInputChange('endDate', date)}
          startLabel="From"
          endLabel="To"
        />
      </div>

      {/* Display existing education entries */}
      {educations.map((edu) => (
        <Box 
          key={edu.id} 
          sx={{ 
            mt: 2, 
            p: 2, 
            border: '1px solid #ddd', 
            borderRadius: 1,
            maxWidth: "500px",
            margin: "20px auto",
            position: 'relative'
          }}
        >
          <IconButton
            onClick={() => handleDelete(edu.id)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'error.main'
            }}
          >
            <DeleteIcon />
          </IconButton>
          <h3>{edu.degree} in {edu.field}</h3>
          <h4>{edu.institution}</h4>
          <p>{edu.location}</p>
          <p>Grade: {edu.grade}</p>
          <p>{edu.startDate} - {edu.endDate}</p>
        </Box>
      ))}
    </div>
  );
}

export default Education;