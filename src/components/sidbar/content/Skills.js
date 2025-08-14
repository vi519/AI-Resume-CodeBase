import { Chip } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
function Skills() {
  return (
    <div><Chip
    label="Custom delete icon"
    //onClick={handleClick}
    //onDelete={handleDelete}
    deleteIcon={<DeleteIcon />}
    variant="outlined"
  /></div>
  )
}

export default Skills