"use client"
import { Button, InputAdornment, TextField, Box, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import "@/styles/components/experience.css";
import { addMore } from '@/constants/sidebarconstant';
import WorkIcon from '@mui/icons-material/Work';
import dayjs from "dayjs";
import DoubleDatePickerWrapper from '@/wrappper/DoubleDatePickerWrapper';
function Experience() {
    const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const textFields = [
    { label: "Job Title", rows: 1 },
    { label: "Company Name", rows: 1 },
    { label: "Location", rows: 1 },
    { label: "date", rows: 1 },
    {label:"currentCheck", row:1},
    { label: "Work Description", rows: 4 },
    { label: "Additional Notes", rows: 1 }
  ];

  return (
    <div>
      <div className="ai-cv-experience-content">
        <Button variant="contained" color="success" fullWidth>
          {addMore}
        </Button>
      </div>

      {textFields.map((field, index) => (
        <Box key={index} className="ai-cv-experience-textbox">
          <TextField
            label={field.label}
            multiline={field.rows > 1}
            rows={field.rows}
            variant="standard"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WorkIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: "500px", // limit the width
            }}
          />
        </Box>
      ))}
<Checkbox
  checked={true}
//  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
<div style={{ maxWidth: "500px", margin: "auto" }}>
      <DoubleDatePickerWrapper
        startDate={startDate}
        endDate={endDate}
        onStartChange={setStartDate}
        onEndChange={setEndDate}
        startLabel="From"
        endLabel="To"
      />
      <div style={{ marginTop: "20px" }}>
        <strong>Selected Range:</strong> {startDate?.format("DD/MM/YYYY")} - {endDate?.format("DD/MM/YYYY")}
      </div>
    </div>
    </div>
  );
}

export default Experience;
