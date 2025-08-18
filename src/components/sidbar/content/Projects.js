"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, deleteProject } from '@/redux/resumeSlice';
import { 
  TextField, 
  Button, 
  Box, 
  IconButton, 
  InputAdornment,
  Chip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import dayjs from 'dayjs';
import DoubleDatePickerWrapper from '@/wrappper/DoubleDatePickerWrapper';

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.resume.projects);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: [],
    link: '',
    githubLink: '',
    startDate: dayjs(),
    endDate: dayjs()
  });

  const [techInput, setTechInput] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddTechnology = (tech) => {
    if (tech.trim() && !formData.technologies.includes(tech.trim())) {
      handleInputChange('technologies', [...formData.technologies, tech.trim()]);
    }
    setTechInput('');
  };

  const handleDeleteTechnology = (techToDelete) => {
    handleInputChange(
      'technologies',
      formData.technologies.filter(tech => tech !== techToDelete)
    );
  };

  const handleSubmit = () => {
    dispatch(addProject({
      id: Date.now().toString(),
      ...formData,
      startDate: formData.startDate.format('YYYY-MM-DD'),
      endDate: formData.endDate.format('YYYY-MM-DD')
    }));
    // Reset form
    setFormData({
      title: '',
      description: '',
      technologies: [],
      link: '',
      githubLink: '',
      startDate: dayjs(),
      endDate: dayjs()
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, margin: '0 auto' }}>
        <TextField
          label="Project Title"
          variant="standard"
          fullWidth
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CodeIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Description"
          variant="standard"
          fullWidth
          multiline
          rows={4}
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
        />

        <TextField
          label="Technologies"
          variant="standard"
          fullWidth
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddTechnology(techInput);
            }
          }}
        />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {formData.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              onDelete={() => handleDeleteTechnology(tech)}
              variant="outlined"
            />
          ))}
        </Box>

        <TextField
          label="Project Link"
          variant="standard"
          fullWidth
          value={formData.link}
          onChange={(e) => handleInputChange('link', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Codebase Link"
          variant="standard"
          fullWidth
          value={formData.githubLink}
          onChange={(e) => handleInputChange('githubLink', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CodeIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* <DoubleDatePickerWrapper
          startDate={formData.startDate}
          endDate={formData.endDate}
          onStartChange={(date) => handleInputChange('startDate', date)}
          onEndChange={(date) => handleInputChange('endDate', date)}
          startLabel="Start Date"
          endLabel="End Date"
        /> */}

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
          Add Project
        </Button>
      </Box>

      {/* Display existing projects */}
      {projects.map((project) => (
        <Box
          key={project.id}
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
            onClick={() => handleDelete(project.id)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'error.main'
            }}
          >
            <DeleteIcon />
          </IconButton>
          <h3 style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '90%' // leave space for delete icon
      }}>{project.title}</h3>
          {/* <p>{project.description}</p>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 1 }}>
            {project.technologies.map((tech, index) => (
              <Chip key={index} label={tech} size="small" />
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <LinkIcon /> Project Link
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub
              </a>
            )}
          </Box>
          <p>
            {project.startDate} - {project.endDate}
          </p> */}
        </Box>
      ))}
    </div>
  );
}

export default Projects;