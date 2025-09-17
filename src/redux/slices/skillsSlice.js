import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  technical: [],
  soft: [],
  domain: [],
  transferable: []
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    resetSkills: (state) => {
      return initialState;
    },
    addSkill: (state, action) => {
      const { category, skill } = action.payload;
      state[category].push(skill);
    },
    removeSkill: (state, action) => {
      const { category, skill } = action.payload;
      state[category] = state[category].filter(s => s !== skill);
    }
  }
});

export const { resetSkills, addSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;