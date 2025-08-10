import Preview from "@/components/preview/Preview";
import CVIntroSection from "@/components/sidbar/CVIntroSection";
import react from "react";
import "../../styles/components/portal.css"
import CVSetup from "@/components/sidbar/CVSetup";
import CVAccordian from "@/components/sidbar/CVAccordian";

export default function Portal() {
  return (
    <div className="ai-cv-portal">
      <div className="ai-cv-mysidebarpages"><CVIntroSection/>
      <CVSetup/>
      <CVAccordian/></div>
      <div className="ai-cv-previewpages"><Preview/></div>
    </div>
  );
}