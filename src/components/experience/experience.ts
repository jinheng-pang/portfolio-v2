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
        startDate: "Feb 2026",
        endDate: "Present",
        roleTitle: "Software Engineer",
        company: "Medhealth",
        description: "Develop and maintain Medebridge, an internal platform used to manage patient cases, clinician workflows, and coordination between healthcare providers, employers, and insurers. Contribute to improving system functionality and reliability to support efficient healthcare service delivery.",
        fact: "First ever Software Engineering experience."
    },
    {
        id: "2",
        startDate: "Jul 2025",
        endDate: "Present",
        roleTitle: "IT Director",
        company: "Monash Japanese Club",
        description: "Overseeing the development of a full-stack Japanese learning platform using Next.js, TypeScript, and CSS for the frontend, with a Supabase and Node.js backend. Responsible for technical architecture, code reviews, and deployment workflow.",
        fact: "Led a team of students in building a Japanese Learning full-stack application"
    },
    {
        id: "3",
        startDate: "Jun 2025",
        endDate: "Nov 2025",
        roleTitle: "IT Service Desk Analyst",
        company: "Medhealth",
        description: "Diagnose and resolve user issues across Windows, network, and application layers; manage ITSM tickets; and perform identity and device administration using Azure AD, Intune, and Microsoft 365 services.",
        fact: "First ever internship that is part of the Monash 5 month IBL program."
    }
]
