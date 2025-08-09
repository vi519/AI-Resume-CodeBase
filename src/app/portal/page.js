import Preview from "@/components/preview/Preview";
import CVIntroSection from "@/components/sidbar/CVIntroSection";
import react from "react";
import "../../styles/components/portal.css"

export default function Portal() {
  return (
    <div className="ai-cv-portal">
      <div className="ai-cv-mysidebarpages"><CVIntroSection/></div>
      <div className="ai-cv-previewpages"><Preview/></div>
    </div>
  );
}