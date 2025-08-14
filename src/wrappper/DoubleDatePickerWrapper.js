import React from "react";
import { Box, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DoubleDatePickerWrapper = ({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
  startLabel = "Start Date",
  endLabel = "End Date",
  gap = 2,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ display: "flex", gap }}>
        <DatePicker
          label={startLabel}
          value={startDate}
          onChange={onStartChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
        <DatePicker
          label={endLabel}
          value={endDate}
          onChange={onEndChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default DoubleDatePickerWrapper;
