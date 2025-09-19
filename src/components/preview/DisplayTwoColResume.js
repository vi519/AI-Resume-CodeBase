"use client"
import React, { useRef } from "react";
import { useSelector } from 'react-redux';
import { formatDateToMonthYear } from '@/utils/utils';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import html2pdf from 'html2pdf.js';

export default function DisplayTwoColResume() {
  const resumeData = useSelector((state) => state.resume);
  const resumeRef = useRef(null);
console.log("resumeData",resumeData)
  // Add download function
  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0.5,
      filename: `${resumeData?.personalDetails?.firstName || 'resume'}_${resumeData?.personalDetails?.lastName || ''}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  // Add button styles
  const downloadButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333'
    }
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "auto",
    // padding: "30px",
    fontFamily: "Segoe UI, Arial, sans-serif",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    gap: "20px",
    overflowWrap: "break-word",
    wordWrap: "break-word"
  };

  const leftColumnStyle = {
    flex: "0 0 35%", // Fixed width for left column
    paddingRight: "20px",
    borderRight: "2px solid #f3f4f6",
    minWidth: 0 // Prevents flex items from overflow
  };

  const rightColumnStyle = {
    flex: "0 0 61%", // Fixed width for right column
    // paddingLeft: "20px",
    minWidth: 0 // Prevents flex items from overflow
  };

  const textStyle = {
    wordBreak: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    maxWidth: "100%"
  };

  const linkStyle = {
    wordBreak: "break-all", // Ensures long URLs wrap properly
    maxWidth: "100%",
    display: "inline-block"
  };

  const descriptionStyle = {
    ...textStyle,
    lineHeight: "1.6",
    fontSize: "14px",
    color: "#374151",
    margin: "8px 0"
  };

  // Update the section style
  const sectionStyle = {
    marginBottom: "25px",
    background: "#f9fafb",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    width: "100%", // Ensures section takes full width of parent
    boxSizing: "border-box", // Includes padding in width calculation
    overflow: "hidden" // Add this to contain content
  };

  const projectStyle = {
    ...sectionStyle,
    '& h3': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  };

  const certificationStyle = {
    marginBottom: "6px",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };

  const achievementStyle = {
    listStyle: "disc",
    marginLeft: "16px",
    lineHeight: "1.4",
    '& li': {
      marginBottom: "8px",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  };

  if (!resumeData) return <div style={{ textAlign: "center", marginTop: "20px" }}>No resume data found</div>;

  return (
    <>
      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        onClick={handleDownloadPDF}
        sx={downloadButtonStyle}
      >
        Download PDF
      </Button>

      <div ref={resumeRef} style={containerStyle}>
        {/* Left Column */}
        <div style={leftColumnStyle}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1 style={{ 
              fontSize: "24px", 
              fontWeight: "700", 
              marginBottom: "8px", 
              color: "#1f2937",
              ...textStyle 
            }}>
              {resumeData?.personalDetails?.firstName || ''} {resumeData?.personalDetails?.lastName || ''}
            </h1>
            <p style={{ 
              fontSize: "13px", 
              color: "#4b5563",
              ...textStyle 
            }}>
              {resumeData?.personalDetails?.countryCode} {resumeData?.personalDetails?.contactNumber} | {resumeData?.personalDetails?.emailAddress}
            </p>
            <div style={{ marginTop: "8px", fontSize: "13px" }}>
              {resumeData?.professionalLinks?.github && (
                <a href={resumeData.professionalLinks.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={linkStyle}>
                  GitHub
                </a>
              )}
              {resumeData?.professionalLinks?.linkedin && (
                <a href={resumeData.professionalLinks.linkedin} target="_blank" rel="noreferrer" style={{ display: "block", color: "#2563eb", marginBottom: "4px" }}>LinkedIn</a>
              )}
              {resumeData?.professionalLinks?.portfolio && (
                <a href={resumeData.professionalLinks.portfolio} target="_blank" rel="noreferrer" style={{ display: "block", color: "#2563eb" }}>Portfolio</a>
              )}
            </div>
          </div>

          {/* Skills */}
          {(resumeData?.skills?.technical?.length > 0 || 
            resumeData?.skills?.soft?.length > 0 || 
            resumeData?.skills?.management?.length > 0) && (
            <section style={sectionStyle}>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#111827" }}>Skills</h2>
              {resumeData?.skills?.technical?.length > 0 && (
                <p><strong>Technical:</strong> {resumeData.skills.technical.join(", ")}</p>
              )}
              {resumeData?.skills?.management?.length > 0 && (
                <p><strong>Management:</strong> {resumeData.skills.management.join(", ")}</p>
              )}
              {resumeData?.skills?.soft?.length > 0 && (
                <p><strong>Soft Skills:</strong> {resumeData.skills.soft.join(", ")}</p>
              )}
            </section>
          )}

          {/* Education */}
          {resumeData?.education?.length > 0 && (
            <section style={sectionStyle}>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#111827" }}>Education</h2>
              {resumeData.education.map((edu) => (
                <div key={edu.id} style={{ marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#1e3a8a" }}>{edu.degree} in {edu.field}</h3>
                  <p style={{ fontSize: "13px", color: "#4b5563", margin: 0 }}>{edu.institution}, {edu.location}</p>
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>
                    {formatDateToMonthYear(edu.startDate)} - {edu.current ? 'Present' : formatDateToMonthYear(edu.endDate)}
                  </span>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {resumeData?.certifications?.length > 0 && (
            <section style={sectionStyle}>
              <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#111827" }}>Certifications</h2>
              {resumeData.certifications.map((cert) => (
                <div key={cert.id} style={certificationStyle}>
                  <strong style={{ marginRight: "4px" }}>{cert.name}</strong>
                  <span style={{ color: "#6b7280" }}>– {cert.issuingOrganization}</span>
                  <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "2px" }}>{cert.issueDate}</div>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column */}
        <div style={rightColumnStyle}>
          {/* Experience */}
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Experience</h2>
            {resumeData?.experience?.length > 0 && resumeData.experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: "15px" }}>
                <h3 style={{ 
                  fontSize: "16px", 
                  fontWeight: "600", 
                  color: "#1e3a8a",
                  ...textStyle 
                }}>
                  {exp.jobTitle} @ {exp.companyName}
                </h3>
                <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "5px" }}>{exp.startDate} - {exp.endDate}</div>
                <p style={descriptionStyle}>{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          {resumeData?.projects?.length > 0 && (
            <section style={projectStyle}>
              <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Projects</h2>
              {resumeData.projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: "15px", maxWidth: "100%" }}>
                  <h3 style={{ 
                    fontSize: "17px", 
                    fontWeight: "600", 
                    color: "#1e3a8a",
                    marginBottom: "4px",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}>{proj.title}</h3>
                  <p style={{ 
                    color: "#374151",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    wordBreak: "break-word"
                  }}>{proj.description}</p>
                  <div style={{ marginTop: "5px", fontSize: "13px" }}>
                    {proj.link && <a href={proj.link} style={{ marginRight: "10px", color: "#2563eb", wordBreak: "break-all" }}>Live</a>}
                    {proj.githubLink && <a href={proj.githubLink} style={{ color: "#2563eb", wordBreak: "break-all" }}>GitHub</a>}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Achievements */}
          {resumeData?.achievements?.length > 0 && (
            <section style={sectionStyle}>
              <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Achievements</h2>
              <ul style={achievementStyle}>
                {resumeData.achievements.map((ach) => (
                  <li key={ach.id} style={{ 
                    marginBottom: "5px",
                    paddingRight: "10px",
                    fontSize: "14px",
                    color: "#374151"
                  }}>{ach.description}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
