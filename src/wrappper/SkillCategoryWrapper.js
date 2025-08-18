"use client";
import { useSelector, useDispatch } from 'react-redux';
import { updateSkills } from '@/redux/resumeSlice';
import { Box, TextField, Chip, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';

function SkillCategoryWrapper({ category, placeholder, title }) {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills[category] || []);
  const [inputValue, setInputValue] = useState('');

  const handleAddSkill = () => {
    if (inputValue.trim()) {
      dispatch(updateSkills({
        category: category,
        skills: [...skills, inputValue.trim()]
      }));
      setInputValue('');
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    dispatch(updateSkills({
      category: category,
      skills: skills.filter(skill => skill !== skillToDelete)
    }));
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, mb: 3 }}>
      <Typography
        variant="h6"
        sx={{ mb: 1, fontSize: '14px' }}
      >
        {title}
      </Typography>
      
      {/* Scrollable skill chips */}
      <Box
        sx={{
          maxHeight: 200,
          overflowY: 'auto',
          border: '1px solid #e0e0e0',
          marginBottom: "8px",
          borderRadius: 1,
          p: 2,
          display: 'flex',
          flexWrap: 'wrap',
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#00bcd4',
            borderRadius: '4px'
          }
        }}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            onDelete={() => handleDeleteSkill(skill)}
            deleteIcon={<DeleteIcon />}
            sx={{
              m: 0.5,
              backgroundColor: '#757575',
              color: 'white',
              '&:hover': { backgroundColor: '#616161' },
              '& .MuiChip-deleteIcon': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { color: '#ff1744' }
              }
            }}
          />
        ))}
      </Box>

      {/* Input field and button */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          variant="standard"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddSkill();
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddSkill}
     
          sx={{
            borderRadius: 2,
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
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default SkillCategoryWrapper;
