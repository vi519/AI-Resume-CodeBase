"use client"
import React, { useRef } from "react";
import { useSelector } from 'react-redux';
import { formatDateToMonthYear } from '@/utils/utils';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import html2pdf from 'html2pdf.js';

export default function DisplayClassic() {
  const resumeData = useSelector((state) => state.resume);
  const resumeRef = useRef(null);

  // Add download function
  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
    //   margin: 0.5,
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

  if (!resumeData) return <div style={{ textAlign: "center", marginTop: "20px" }}>No resume data found</div>;

  const containerStyle = {
    maxWidth: "800px", // Reduced from 900px
    margin: "40px auto",
    padding: "30px",
    fontFamily: "Segoe UI, Arial, sans-serif",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    wordWrap: "break-word", // Ensures text wraps
    overflowWrap: "break-word" // Additional text wrapping support
  };

  const sectionStyle = {
    marginTop: "20px",
    padding: "15px",
    background: "#f9fafb",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
  };

  const descriptionStyle = {
    lineHeight: "1.6",
    whiteSpace: "pre-line",
    color: "#374151",
    maxWidth: "100%", // Ensures text stays within container
    wordBreak: "break-word" // Handles long words
  };

  const linkStyle = {
    color: "#2563eb",
    wordBreak: "break-all", // Ensures long URLs wrap properly
    maxWidth: "100%",
    display: "inline-block",
    paddingRight:"4px"
  };

  const achievementStyle = {
    paddingLeft: "20px",
    color: "#374151",
    margin: 0,
    width: "100%",
    boxSizing: "border-box"
  };

  const achievementItemStyle = {
    marginBottom: "5px",
    wordBreak: "break-word",
    overflowWrap: "break-word",
    lineHeight: "1.4",
    paddingRight: "10px",
    fontSize: "14px",
    whiteSpace:"normal"
  };

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

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ 
            fontSize: "28px", // Reduced from 34px
            fontWeight: "700",
            marginBottom: "8px",
            color: "#1f2937",
            lineHeight: "1.2" // Added for better text spacing
          }}>
            {resumeData?.personalDetails?.firstName || ''} {resumeData?.personalDetails?.lastName || ''}
          </h1>
          <p style={{ fontSize: "15px", color: "#4b5563" }}>
            {resumeData?.personalDetails?.countryCode} {resumeData?.personalDetails?.contactNumber} | {resumeData?.personalDetails?.emailAddress}
          </p>
          <div style={{ marginTop: "10px", fontSize: "14px" }}>
            {resumeData?.professionalLinks?.github && (
              <a href={resumeData.professionalLinks.github} target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a>
            )}
            {resumeData?.professionalLinks?.linkedin && (
              <a href={resumeData.professionalLinks.linkedin} target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn</a>
            )}
            {resumeData?.professionalLinks?.portfolio && (
              <a href={resumeData.professionalLinks.portfolio} target="_blank" rel="noreferrer" style={linkStyle}>Portfolio</a>
            )}
          </div>
        </div>

        {/* Experience */}
        {resumeData?.experience?.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Experience</h2>
            {resumeData.experience.map((exp) => (
              <div key={exp.id} style={{ marginBottom: "15px" }}>
                <h3 style={{ 
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1e3a8a",
                  marginBottom: "4px"
                }}>{exp.jobTitle} @ {exp.companyName}</h3>
                <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "5px" }}>
                  {formatDateToMonthYear(exp.startDate)} - {exp.current ? 'Present' : formatDateToMonthYear(exp.endDate)}
                </div>
                <p style={descriptionStyle}>{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {resumeData?.education?.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Education</h2>
            {resumeData.education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: "10px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#1e3a8a" }}>{edu.degree} in {edu.field}</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#4b5563" }}>{edu.institution}, {edu.location}</p>
                <span style={{ fontSize: "12px", color: "#6b7280" }}>
                  {formatDateToMonthYear(edu.startDate)} - {edu.current ? 'Present' : formatDateToMonthYear(edu.endDate)}
                </span>
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {(resumeData?.skills?.technical?.length > 0 || 
          resumeData?.skills?.soft?.length > 0 || 
          resumeData?.skills?.management?.length > 0) && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Skills</h2>
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

        {/* Projects */}
        {resumeData?.projects?.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Projects</h2>
            {resumeData.projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: "15px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#1e3a8a" }}>{proj.title}</h3>
                <p style={descriptionStyle}>{proj.description}</p>
                {proj.link && (
                  <div style={{ marginTop: "5px" }}>
                    <a href={proj.link} style={linkStyle}>Project Link</a>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {resumeData?.certifications?.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Certifications</h2>
            {resumeData.certifications.map((cert) => (
              <div key={cert.id} style={{ marginBottom: "8px" }}>
                <strong>{cert.name}</strong> – {cert.issuingOrganization}
                {cert.credentialLink && (
                  <a href={cert.credentialLink} target="_blank" rel="noreferrer" style={linkStyle}>
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Achievements */}
        {resumeData?.achievements?.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>
              Achievements
            </h2>
            <ul style={achievementStyle}>
              {resumeData.achievements.map((ach) => (
                <li key={ach.id} style={achievementItemStyle}>
                  {ach.description}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </>
  );
}