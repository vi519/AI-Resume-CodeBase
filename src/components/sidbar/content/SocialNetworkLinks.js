// ExampleTextFieldsWithIcons.jsx
"use client"
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from 'react-redux';
import { updateProfessionalLinks } from '@/redux/resumeSlice';

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

export default function SocialNetworkLinks() {
  const dispatch = useDispatch();
  const professionalLinks = useSelector((state) => state.resume.professionalLinks);

  const handleLinkChange = (field, value) => {
    dispatch(updateProfessionalLinks({
      ...professionalLinks,
      [field]: value
    }));
  };

  const openLink = (url) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gap: 12 }}>
      <TextField
        label="GitHub"
        variant="standard"
        fullWidth
        value={professionalLinks.github}
        onChange={(e) => handleLinkChange('github', e.target.value)}
        placeholder="https://github.com/your-username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GitHubIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="open github"
                edge="end"
                onClick={() => openLink(professionalLinks.github)}
                size="large"
              >
                <LanguageIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="LinkedIn"
        variant="standard"
        fullWidth
        value={professionalLinks.linkedin}
        onChange={(e) => handleLinkChange('linkedin', e.target.value)}
        placeholder="https://www.linkedin.com/in/your-name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="open linkedin"
                edge="end"
                onClick={() => openLink(professionalLinks.linkedin)}
                size="large"
              >
                <LanguageIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Portfolio"
        variant="standard"
        fullWidth
        value={professionalLinks.portfolio}
        onChange={(e) => handleLinkChange('portfolio', e.target.value)}
        placeholder="https://your-portfolio.com"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="open portfolio"
                edge="end"
                onClick={() => openLink(professionalLinks.portfolio)}
                size="large"
              >
                <LanguageIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        label="Coding Profile"
        variant="standard"
        fullWidth
        value={professionalLinks.codingProfile}
        onChange={(e) => handleLinkChange('codingProfile', e.target.value)}
        placeholder="https://leetcode.com/your-username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CodeIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="open coding profile"
                edge="end"
                onClick={() => openLink(professionalLinks.codingProfile)}
                size="large"
              >
                <LanguageIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
