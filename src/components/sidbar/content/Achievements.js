"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAchievement, deleteAchievement } from '@/redux/resumeSlice';
import { TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Achievements() {
  const dispatch = useDispatch();
  const achievements = useSelector((state) => state.resume.achievements);

  const [achievement, setAchievement] = useState('');

  const handleAddAchievement = () => {
    if (achievement.trim()) {
      dispatch(addAchievement({
        id: Date.now().toString(),
        description: achievement
      }));
      setAchievement('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteAchievement(id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600, margin: '0 auto' }}>
        <TextField
          label="Achievement"
          variant="standard"
          fullWidth
          multiline
          rows={3}
          value={achievement}
          onChange={(e) => setAchievement(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmojiEventsIcon />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
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
          onClick={handleAddAchievement}
          fullWidth
        >
          Add Achievement
        </Button>
      </Box>

      {achievements.map((item) => (
        <Box
          key={item.id}
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
            onClick={() => handleDelete(item.id)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'error.main'
            }}
          >
            <DeleteIcon />
          </IconButton>
          <p   style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '90%' // leave space for delete icon
      }} >{item.description}</p>
        </Box>
      ))}
    </div>
  );
}

export default Achievements;