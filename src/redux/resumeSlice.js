import { createSlice } from '@reduxjs/toolkit';
import initialResumeData from '../json/resumse.json';

const resumeSlice = createSlice({
  name: 'resume',
  initialState: initialResumeData,
  reducers: {
    updatePersonalDetails: (state, action) => {
      state.personalDetails = { ...state.personalDetails, ...action.payload };
    },
    updateProfessionalLinks: (state, action) => {
      state.professionalLinks = { ...state.professionalLinks, ...action.payload };
    },
    addExperience: (state, action) => {
      // Ensure we're adding to experience array
      if (!Array.isArray(state.experience)) {
        state.experience = [];
      }
      state.experience.push({ ...action.payload, id: Date.now().toString() });
    },
    updateExperience: (state, action) => {
      const index = state.experience.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.experience[index] = action.payload;
      }
    },
    deleteExperience: (state, action) => {
      state.experience = state.experience.filter(exp => exp.id !== action.payload);
    },
    addEducation: (state, action) => {
      // Ensure we're adding to education array
      if (!Array.isArray(state.education)) {
        state.education = [];
      }
      state.education.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.education = state.education.filter(edu => edu.id !== action.payload);
    },
    updateSkills: (state, action) => {
      const { category, skills } = action.payload;
      state.skills[category] = skills;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
    addCertification: (state, action) => {
      state.certifications.push(action.payload);
    },
    deleteCertification: (state, action) => {
      state.certifications = state.certifications.filter(cert => cert.id !== action.payload);
    },
    addAchievement: (state, action) => {
      state.achievements.push(action.payload);
    },
    deleteAchievement: (state, action) => {
      state.achievements = state.achievements.filter(achievement => achievement.id !== action.payload);
    },
    updateInterests: (state, action) => {
      state.interests = action.payload;
    }
  }
});

export const {
  updatePersonalDetails,
  updateProfessionalLinks,
  addExperience,
  updateExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
  updateSkills,
  addProject,
  deleteProject,
  addCertification,
  deleteCertification,
  addAchievement,
  deleteAchievement,
  updateInterests
} = resumeSlice.actions;

export default resumeSlice.reducer;