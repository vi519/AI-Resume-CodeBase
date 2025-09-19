"use client"
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import html2pdf from 'html2pdf.js';
import '@/styles/components/displayresume.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { PROFILE_LABELS, LINK_STYLES, CSS_CLASSES } from '@/constants/resumeConstants';
import { SkillSetWrapper } from '@/wrappper/SkillSetWrapper';
import { formatDateToMonthYear } from '@/utils/utils';

function DisplayResume() {
    const resumeData = useSelector((state) => state.resume);
    const resumeRef = useRef(null);

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

            <div ref={resumeRef} id="resume-content" className={CSS_CLASSES.section}>
                <div className={CSS_CLASSES.heading}>
                    <div className={CSS_CLASSES.headerName}>
                        <div>{resumeData?.personalDetails?.firstName || ''}</div>
                        <div>{resumeData?.personalDetails?.lastName || ''}</div>
                    </div>
                    <div className={CSS_CLASSES.sectionTitle}>
                        {(resumeData?.personalDetails?.countryCode || resumeData?.personalDetails?.contactNumber) && (
                            <div className={CSS_CLASSES.subheadingFlex}>
                                <div><CallIcon /></div>
                                <div>{resumeData?.personalDetails?.countryCode} {resumeData?.personalDetails?.contactNumber}</div>
                            </div>
                        )}
                        {resumeData?.personalDetails?.emailAddress && (
                            <div className={CSS_CLASSES.subheadingFlex}>
                                <div><EmailIcon /></div>
                                <div>{resumeData?.personalDetails?.emailAddress}</div>
                            </div>
                        )}
                        {resumeData?.professionalLinks?.github && (
                            <div className={CSS_CLASSES.subheadingFlex}>
                                <a
                                    href={resumeData.professionalLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={LINK_STYLES.container}
                                >
                                    <GitHubIcon style={LINK_STYLES.icon} />
                                    <span>{PROFILE_LABELS.GITHUB}</span>
                                </a>
                            </div>
                        )}
                        {resumeData?.professionalLinks?.linkedin && (
                            <div className={CSS_CLASSES.subheadingFlex}>
                                <a
                                    href={resumeData.professionalLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={LINK_STYLES.container}
                                >
                                    <LinkedInIcon style={LINK_STYLES.icon} />
                                    <span>{PROFILE_LABELS.LINKEDIN}</span>
                                </a>
                            </div>
                        )}
                        {resumeData?.professionalLinks?.portfolio && (
                            <div className={CSS_CLASSES.subheadingFlex}>
                                <a
                                    href={resumeData.professionalLinks.portfolio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={LINK_STYLES.container}
                                >
                                    <LanguageIcon style={LINK_STYLES.icon} />
                                    <span>{PROFILE_LABELS.PORTFOLIO}</span>
                                </a>
                            </div>
                        )}
                        {/* {resumeData?.professionalLinks?.codingProfile && (
                            <div className={CSS_CLASSES.subheadingFlex}>
                                <a
                                    href={resumeData.professionalLinks.codingProfile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={LINK_STYLES.container}
                                >
                                    <CodeIcon style={LINK_STYLES.icon} />
                                    <span>{PROFILE_LABELS.CODING}</span>
                                </a>
                            </div>
                        )} */}
                    </div>

                    <div className="ai-cv-dr-experience">
                        <div className="ai-cv-dr-experience-heading">
                            <div>Experience</div>
                        </div>

                        {resumeData?.experience?.map((exp) => (
                            <div key={exp.id} className='ai-cv-experience-company-section'>
                                <div className='ai-cv-experience-company'>
                                    <div className='ai-cv-experience-company-name'><i>{exp.jobTitle}</i></div>
                                    <div className='ai-cv-experience-company-designation-emp-loc'>
                                    <i>{exp?.companyName}{exp?.location && ` - ${exp.location}`}</i>
                                    </div>
                                    <div className='ai-cv-experience-company-description'>
                                        {exp.description.split('\n').map((point, index) => (
                                            <div key={index}>{point.trim()}</div>
                                        ))}
                                    </div>
                                </div>
                              
                                <div className='ai-cv-experience-company-designation-sec'>
                                   <i> {`${formatDateToMonthYear(exp.startDate)} ${exp.current ? '- Present' : `- ${formatDateToMonthYear(exp.endDate)}`}`}</i>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ai-cv-dr-experience">
                        <div className="ai-cv-dr-experience-heading">
                            <div>Education</div>
                        </div>

                        {resumeData?.education?.map((edu) => (
                            <div key={edu.id} className='ai-cv-experience-company-section'>
                                <div className='ai-cv-experience-company'>
                                    <div className='ai-cv-experience-company-name'><i>{edu?.institution}</i></div>
                                    <div className='ai-cv-experience-company-designation'>
                                        <i>{`${edu?.degree} - ${edu?.field}`}</i>
                                    </div>
                                    {/* <div className='ai-cv-experience-company-description'>
                                    {edu?.field}
                                    </div> */}
                                </div>
                                {/* <div className='ai-cv-experience-company-designation'> */}
                                {/* <span style={{width:"fit-content"}}>{edu?.grade}<br/>
                                {edu?.startDate} - {edu?.current ? 'Present' : edu?.endDate}</span> */}
                                <div className='ai-cv-experience-company-designation-sec'>
                                   <i> {`${formatDateToMonthYear(edu.startDate)} ${edu.current ? '- Present' : `- ${formatDateToMonthYear(edu.endDate)}`}`}
                                    <br/>
                                    {`${edu?.grade}`}</i>
                                </div>
                                    
                                {/* </div> */}
                            </div>
                        ))}
                    </div>
                    <div className="ai-cv-dr-experience">
                        <div className="ai-cv-dr-experience-heading">
                            <div>Projects</div>
                        </div>

                        {resumeData?.projects?.map((proj) => (
                            <div key={proj.id} className='ai-cv-experience-company-section'>
                                <div className='ai-cv-experience-company'>
                                    <div className='ai-cv-experience-company-name'><i>{proj.title}</i></div>
                                   
                                    <div className='ai-cv-experience-company-description-proj'>
                                        {proj.description.split('\n').map((point, index) => (
                                            <span key={index}>{point.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='ai-cv-experience-company-designation'>
                                    {proj?.link}
                                </div>
                            </div>
                        ))}
                    </div>
                   
                    <div className="ai-cv-dr-experience">
                        <div className="ai-cv-dr-experience-heading">
                            <div>Course and Certificate</div>
                        </div>

                        {resumeData?.certifications?.map((cert) => (
                            <div key={cert.id} className='ai-cv-experience-company-section'>
                                <div className='ai-cv-experience-company'>
                                    <div className='ai-cv-experience-company-name'><i>{cert?.name}</i></div>
                                   
                                    <div className='ai-cv-experience-company-description'>
                                        {cert?.issuingOrganization?.split('\n').map((point, index) => (
                                            <span key={index}>{point?.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='ai-cv-experience-company-designation'>
                                    <i>{cert?.credentialLink}</i>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="ai-cv-dr-experience">
                        <div className="ai-cv-dr-experience-heading">
                            {/* <EmojiEventsIcon style={LINK_STYLES.icon} /> */}
                            <div>Achievements</div>
                        </div>

                        {resumeData?.achievements?.length > 0 && (
                            <div className='ai-cv-achievements-container'>
                                {resumeData.achievements.map((achievement) => (
                                    <div key={achievement.id} className='ai-cv-achievement-item'>
                                        <div className='ai-cv-achievement-content'>
                                            <div className='ai-cv-experience-company-description'>
                                                {`• ${achievement.description}`}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>



                    <div className="ai-cv-dr-experience">
                        <div className="ai-cv-dr-experience-heading">
                            {/* <EmojiEventsIcon style={LINK_STYLES.icon} /> */}
                            <div>Skills</div>
                        </div>
                        <div className="ai-cv-skill-section">
    <SkillSetWrapper title="Technical Skills" skills={resumeData?.skills?.technical} />
    <SkillSetWrapper title="Soft Skills" skills={resumeData?.skills?.soft} />
    <SkillSetWrapper title="Management Skills" skills={resumeData?.skills?.management} />
</div>
                   
                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisplayResume;
