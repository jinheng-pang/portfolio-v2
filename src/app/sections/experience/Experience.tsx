import { experiences } from "@/components/experience/experience";
import ExperienceItem from "@/components/experience/experienceItem/ExperienceItem";
import ExperienceCard from "@/components/experience/experienceCard/ExperienceCard";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h2 className="page-subheading neumorphic">Experience</h2>
      <ul className="content">
        {experiences.map((experience, index) => {
          const date = `${experience.startDate} - ${experience.endDate}`;
          return (
            <ExperienceItem key={experience.id} date={date}>
              <ExperienceCard {...experience} />
            </ExperienceItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
