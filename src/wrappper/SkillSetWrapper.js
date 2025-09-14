import React from 'react';
import "@/styles/wrapper/skillsetwrapper.css";

export const SkillSetWrapper = ({ title, skills }) => {
    if (!skills || skills.length === 0) return null;

    return (
        <> {skills?.length>1? <div className="ai-cv-skill-category">
            <span>
                {skills.map((skill, index) => (
                    index === 0
                        ? <span key={index}><span className="title-skill">{title}:</span> {skill}</span>
                        : `, ${skill}`
                ))}
            </span>
        </div>:null}</>
      
    );
};
