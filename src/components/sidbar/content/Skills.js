"use client"
import { useSelector, useDispatch } from 'react-redux';
import { updateSkills } from '@/redux/resumeSlice';
import { Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

function Skills() {
  const dispatch = useDispatch();
  const technicalSkills = useSelector((state) => state.resume.skills.technical);

  const handleAddSkill = (skill) => {
    dispatch(updateSkills({
      category: 'technical',
      skills: [...technicalSkills, skill]
    }));
  };

  const handleDeleteSkill = (skillToDelete) => {
    dispatch(updateSkills({
      category: 'technical',
      skills: technicalSkills.filter(skill => skill !== skillToDelete)
    }));
  };

  return (
    <div>
      <input
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim()) {
            handleAddSkill(e.target.value.trim());
            e.target.value = '';
          }
        }}
        placeholder="Add a technical skill"
      />
      {technicalSkills.map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          onDelete={() => handleDeleteSkill(skill)}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      ))}
    </div>
  );
}

export default Skills;