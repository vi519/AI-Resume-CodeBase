"use client"
import React from 'react'
import "@/styles/components/personaldetails.css"
import { TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material"
import countryData from "@/json/countrycode.json"
import { useSelector, useDispatch } from 'react-redux'
import { updatePersonalDetails } from '@/redux/resumeSlice'

export default function PersonalDetails() {
  const dispatch = useDispatch()
  const personalDetails = useSelector((state) => state.resume.personalDetails)

  const handleChange = (field, value) => {
    dispatch(updatePersonalDetails({ [field]: value }))
  }

  return (
    <div className='ai-cv-personaldetail-section'>
      <div className='ai-cv-personaldetail-initials-section'>
        <div>
          <TextField 
            id="firstName" 
            label="😎 first name" 
            variant="standard" 
            value={personalDetails.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
          />
        </div>
        <div>
          <TextField 
            id="lastName" 
            label="😎 last name" 
            variant="standard" 
            value={personalDetails.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
          />
        </div>
      </div>
      
      <div className="ai-cv-personaldetail-contact-section">
        <FormControl variant="standard" style={{ minWidth:170 }}>
          <InputLabel>country code</InputLabel>
          <Select
            value={personalDetails.countryCode}
            onChange={(e) => handleChange('countryCode', e.target.value)}
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
          value={personalDetails.contactNumber}
          onChange={(e) => handleChange('contactNumber', e.target.value)}
        />
      </div>

      <div className='ai-cv-personaldetail-email'>
        <TextField
          label="📧 email"
          variant="standard"
          fullWidth
          value={personalDetails.emailAddress}
          onChange={(e) => handleChange('emailAddress', e.target.value)}
        />
      </div>
    </div>
  )
}
