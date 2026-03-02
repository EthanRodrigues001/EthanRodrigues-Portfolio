import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiNodedotjs,
    SiNextdotjs,
    SiPrisma,
    SiPostgresql,
    SiPython,
    SiDocker,
    SiKubernetes,
    SiGit,
    SiExpress,
} from "react-icons/si";
import { FaAws, FaCode, FaLink } from "react-icons/fa";

import { Github, Linkedin, Twitter } from "lucide-react"

export const siteConfig = {
    name: "Ethan Rodrigues",
    role: "Software Engineer",
    avatar: "/ethan-rodrigues-avatar.jpg",
    description: "Experience in building and deploying scalable Full Stack applications with AI-driven features, and managing CI/CD pipelines for production-ready SaaS solutions.",
    location: "Mumbai, India",
    email: "ethanrodrigues25&gmail.com", // @TODO: Update with actual email
    resumeUrl: "#", // @TODO: Update with actual resume URL
    meetingUrl: "https://calendly.com/yourname", // @TODO: Update with actual meeting URL
    githubUsername: "EthanRodrigues001",
    githubUrl: "https://github.com/EthanRodrigues001",
    twitterUrl: "https://twitter.com/iamncdai",
    linkedinUrl: "https://linkedin.com/in/yourname",
    stats: [
        { data: 'Full Stack & UI/UX Designer', value: '(Figma)' },
        { data: '3+ years of experience' },
        { data: 'he/him' },
        { value: '@wisplabs.xyz', data: 'Founder' },
        { data: 'Proficient in ', value: 'Next.js' },
        { data: 'Mumbai, India' },
    ],
    socials: [
        {
            name: "X (formerly Twitter)",
            handle: "@EthanRo97737635",
            href: "https://twitter.com/EthanRo97737635",
            icon: Twitter,
        },
        {
            name: "GitHub",
            handle: "github.com/EthanRodrigues001",
            href: "https://github.com/EthanRodrigues001",
            icon: Github,
        },
        {
            name: "LinkedIn",
            handle: "linkedin.com/in/ethan-rodrigues25",
            href: "https://linkedin.com/in/ethan-rodrigues25",
            icon: Linkedin,
        },
    ],
    skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Express", icon: SiExpress },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Python", icon: SiPython },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Prisma", icon: SiPrisma },
        { name: "LangChain", icon: FaLink },
        { name: "LangGraph", icon: FaLink },
        { name: "C", icon: FaCode },
        { name: "Docker", icon: SiDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "AWS", icon: FaAws },
        { name: "Git", icon: SiGit },
    ],
    experiences: [
        {
            position: "Research Intern",
            company: "IISER Mohali",
            startDate: "Jul 2025",
            endDate: "Present",
            badges: ["Machine Learning", "Data Analysis", "Python", "Research", "AI"],
            description: [
                "Working on research focused on predictive modeling and data-driven analysis",
                "Developing machine learning models for real-world datasets and evaluating performance",
                "Collaborating with researchers to analyze experimental data and improve model accuracy",
                "Documenting findings and contributing to research reports and technical documentation",
            ],
        },
        {
            position: "Senior Frontend Developer",
            company: "Lyx UI",
            startDate: "2024",
            endDate: "Present",
            badges: ["React", "Next.js", "TypeScript", "Tailwind", "UI Engineering"],
            description: [
                "Leading development of modern UI components and frontend systems",
                "Building scalable and reusable components using React and Next.js",
                "Optimizing frontend performance and improving developer experience",
                "Collaborating with designers to deliver clean, high-quality UI implementations",
            ],
        },
    ],
    projects: [
        {
            name: "Blingo",
            description: "AI-powered project automation SaaS for building and managing intelligent workflows",
            banner: "/projects/blingo.png",
            live: "https://blingo.wisplabs.xyz/",
            badges: ["AI", "SaaS", "Next.js", "Automation"],
        },
        {
            name: "LYX UI",
            description: "Modern shadcn/ui-based component library for building fast and beautiful web interfaces",
            banner: "/projects/lyxui.png",
            live: "https://lyxui.wisplabs.xyz/",
            badges: ["React", "Next.js", "Tailwind", "UI Library"],
        },
        {
            name: "LetterStack",
            description: "Email SaaS platform for sending mass emails with a powerful Notion-style editor",
            banner: "/projects/letterstack.png",
            live: "https://letterstack-ui.vercel.app/",
            badges: ["SaaS", "Email", "Next.js", "Editor"],
        },
        {
            name: "Wisplabs",
            description: "Digital studio focused on website development, marketing, and building products for clients",
            banner: "/projects/wisplabs.png",
            live: "https://www.wisplabs.xyz/",
            badges: ["Agency", "Web Development", "Marketing"],
        },
    ],
}

// Add UTM_PARAMS for consistency
export const UTM_PARAMS = {
    utm_source: "portfolio",
    utm_medium: "github_graph",
};

