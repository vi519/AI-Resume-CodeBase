"use client"
import React from 'react'
import "@/styles/components/personaldetails.css"
import { TextField, MenuItem, Select, FormControl, InputLabel, InputAdornment } from "@mui/material"
import countryData from "@/json/countrycode.json"
import { useSelector, useDispatch } from 'react-redux'
import { updatePersonalDetails } from '@/redux/resumeSlice'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';

export default function PersonalDetails() {
  const dispatch = useDispatch()
  const personalDetails = useSelector((state) => state.resume.personalDetails)

  const handleChange = (field, value) => {
    dispatch(updatePersonalDetails({ [field]: value }))
  }

  return (
    <div className='ai-cv-personaldetail-section'>
      <div className='ai-cv-personaldetail-initials-section'>
        <div className='ai-cv-personaldetail-name'>
          <TextField 
            id="firstName" 
            label="First Name" 
            variant="standard" 
            fullWidth
            value={personalDetails.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <TextField 
            id="lastName" 
            label="Last Name" 
            variant="standard" 
            fullWidth
            value={personalDetails.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      
      <div className="ai-cv-personaldetail-contact-section">
        <FormControl variant="standard" fullWidth>
          <InputLabel>Country Code</InputLabel>
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
          label="Contact Number"
          variant="standard"
          fullWidth
          value={personalDetails.contactNumber}
          onChange={(e) => handleChange('contactNumber', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className='ai-cv-personaldetail-email'>
        <TextField
          label="Email"
          variant="standard"
          fullWidth
          value={personalDetails.emailAddress}
          onChange={(e) => handleChange('emailAddress', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  )
}
