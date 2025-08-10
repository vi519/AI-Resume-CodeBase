"use client"
import React, { useState } from 'react'
import "@/styles/components/personaldetails.css"
import { TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import countryData from "@/json/countrycode.json"; // your JSON file

export default function PersonalDetails() {
    const [selectedCode, setSelectedCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className='ai-cv-personaldetail-section'>
      <div className='ai-cv-personaldetail-initials-section'>
        <div><TextField id="standard-basic" label="😎 first name" variant="standard" /></div>
        <div><TextField id="standard-basic" label="😎 last name" variant="standard" /></div>
      </div>
      <div
      className="ai-cv-personaldetail-contact-section"
   
    >
      <FormControl variant="standard" style={{ minWidth:170 }}>
        <InputLabel>country code</InputLabel>
        <Select
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
        >
          {countryData.map((country) => (
            <MenuItem key={country.iso} value={country.code}>
              +{country.code} {country.iso}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="☎️ contact number"
        variant="standard"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>

    <div className='ai-cv-personaldetail-email'>
  <TextField
    label="📧 email"
    variant="standard"
    fullWidth   // ✅ MUI prop for 100% width
  />
</div>
    </div>
  )
}
