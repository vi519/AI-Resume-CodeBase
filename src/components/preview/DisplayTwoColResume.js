import React from "react";
import { useSelector } from 'react-redux';
import { formatDateToMonthYear } from '@/utils/utils';

export default function DisplayTwoColResume() {
  // Get data from Redux store
  const resumeData = useSelector((state) => state.resume);

  if (!resumeData) return <div style={{ textAlign: "center", marginTop: "20px" }}>No resume data found</div>;

  const leftColumnStyle = {
    flex: 1,
    paddingRight: "20px",
    borderRight: "2px solid #f3f4f6"
  };

  const rightColumnStyle = {
    flex: 2,
    paddingLeft: "20px"
  };

  const sectionStyle = {
    marginBottom: "25px",
    background: "#f9fafb",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "30px", fontFamily: "Segoe UI, Arial, sans-serif", background: "#ffffff", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", display: "flex", gap: "20px" }}>
      {/* Left Column */}
      <div style={leftColumnStyle}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "8px", color: "#1f2937" }}>
            {resumeData?.personalDetails?.firstName || ''} {resumeData?.personalDetails?.lastName || ''}
          </h1>
          <p style={{ fontSize: "14px", color: "#4b5563" }}>
            {resumeData?.personalDetails?.countryCode} {resumeData?.personalDetails?.contactNumber} | {resumeData?.personalDetails?.emailAddress}
          </p>
          <div style={{ marginTop: "8px", fontSize: "13px" }}>
            {resumeData?.professionalLinks?.github && (
              <a href={resumeData.professionalLinks.github} target="_blank" rel="noreferrer" style={{ display: "block", color: "#2563eb", marginBottom: "4px" }}>GitHub</a>
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
              <div key={cert.id} style={{ marginBottom: "6px" }}>
                <strong>{cert.name}</strong> – {cert.issuingOrganization}
                <div style={{ fontSize: "12px", color: "#6b7280" }}>{cert.issueDate}</div>
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
              <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#1e3a8a" }}>{exp.jobTitle} @ {exp.companyName}</h3>
              <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "5px" }}>{exp.startDate} - {exp.endDate}</div>
              <p style={{ lineHeight: "1.6", whiteSpace: "pre-line", color: "#374151" }}>{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        {resumeData?.projects?.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Projects</h2>
            {resumeData.projects.map((proj) => (
              <div key={proj.id} style={{ marginBottom: "15px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#1e3a8a" }}>{proj.title}</h3>
                <p style={{ color: "#374151" }}>{proj.description}</p>
                <div style={{ marginTop: "5px" }}>
                  {proj.link && <a href={proj.link} style={{ marginRight: "10px", color: "#2563eb" }}>Live</a>}
                  {proj.githubLink && <a href={proj.githubLink} style={{ color: "#2563eb" }}>GitHub</a>}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Achievements */}
        {resumeData?.achievements?.length > 0 && (
          <section style={sectionStyle}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", color: "#111827" }}>Achievements</h2>
            <ul style={{ paddingLeft: "20px", color: "#374151" }}>
              {resumeData.achievements.map((ach) => (
                <li key={ach.id} style={{ marginBottom: "5px" }}>{ach.description}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
