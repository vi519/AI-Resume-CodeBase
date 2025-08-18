import SkillCategoryWrapper from '@/wrappper/SkillCategoryWrapper';
import React from 'react';


function Skills() {
  return (
    <div>
      <SkillCategoryWrapper
        category="technical"
        placeholder="Add a technical skill"
        title="Technical Skills"
      />
      <SkillCategoryWrapper
        category="soft"
        placeholder="Add a soft skill"
        title="Soft Skills"
      />
      <SkillCategoryWrapper
        category="management"
        placeholder="Add a management skill"
        title="Management Skills"
      />
    </div>
  );
}

export default Skills;
