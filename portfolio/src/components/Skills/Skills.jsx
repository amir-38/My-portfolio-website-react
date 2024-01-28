import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillsCard from "./SkillsCard/SkillsCard";
import SkillsInfoCard from "./SkillsCard/SkillsInfoCard/SkillsInfoCard";

export default function Skills() {
  const [selectedSkil, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <>
      <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item) => (
              <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkil.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillsInfoCard
              heading={selectedSkil.title}
              skills={selectedSkil.skills}
            />
          </div>
        </div>
      </section>
    </>
  );
}
