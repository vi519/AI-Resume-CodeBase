// ExampleTextFieldsWithIcons.jsx
import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

// icons (install @mui/icons-material if you haven't)
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language"; // portfolio / website
import CodeIcon from "@mui/icons-material/Code"; // leetcode or code profile

export default function SocialNetworkLinks() {
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", display: "grid", gap: 12 }}>
      {/* GitHub */}
      <TextField
        label="GitHub"
        variant="standard"
        fullWidth
        placeholder="https://github.com/your-username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GitHubIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {/* optional clickable icon — opens link or triggers validation */}
              <IconButton
                aria-label="open github"
                edge="end"
               
                size="large"
              >
                {/* keep small so it doesn't dominate */}
               
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* LinkedIn */}
      <TextField
        label="LinkedIn"
        variant="standard"
        fullWidth
        placeholder="https://www.linkedin.com/in/your-name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkedInIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* Portfolio / Website */}
      <TextField
        label="Portfolio"
        variant="standard"
        fullWidth
        placeholder="https://your-portfolio.com"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* LeetCode or code profile */}
      <TextField
        label="Coding Profile"
        variant="standard"
        fullWidth
        placeholder="https://leetcode.com/your-username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CodeIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
