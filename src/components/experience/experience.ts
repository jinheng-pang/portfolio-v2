export interface ExperienceProps {
    id: string;
    startDate: string,
    endDate: string,
    roleTitle: string,
    company: string,
    description: string,
    fact: string,
}

export const experiences: ExperienceProps[] = [
    {
        id: "1",
        startDate: "Jul 2025",
        endDate: "Present",
        roleTitle: "IT Director",
        company: "Monash Japanese Club",
        description: "Leading an initiative in building a Japanese Learning web app to enhance our member's experience.",
        fact: "Led a team of students in building a Japanese Learning full-stack application"
    },
    {
        id: "2",
        startDate: "Jun 2025",
        endDate: "Nov 2025",
        roleTitle: "IT Service Desk Analyst",
        company: "Medhealth",
        description: "First ever internship that is part of the Monash 5 month IBL program.",
        fact: "First ever internship that is part of the Monash 5 month IBL program."
    }
]
