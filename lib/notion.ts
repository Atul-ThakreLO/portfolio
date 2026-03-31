/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Client } from "@notionhq/client";
import { projects as fallbackProjects, experiences as fallbackExperiences, Experience } from "@/data";
import { Project } from "@/types";

const notionToken = process.env.NOTION_TOKEN;

const notion = new Client({
  auth: notionToken || "dummy_token",
});

const isConfigured = (dbId?: string) => {
  return !!notionToken && !!dbId;
};

// ---------------------------------------------------------------------------
// 1. Projects
// ---------------------------------------------------------------------------
export const getProjects = async (): Promise<Project[]> => {
  const dbId = process.env.NOTION_PROJECTS_DB_ID;
  if (!isConfigured(dbId)) return fallbackProjects;

  try {
    // @ts-ignore
    const response = await (notion as any).dataSources.query({
      data_source_id: dbId!,
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        name: props.Name?.title?.[0]?.plain_text || "Untitled",
        description: props.Description?.rich_text?.[0]?.plain_text || "",
        github: props.Github?.url || "",
        url: props.LiveUrl?.url || undefined,
        category: props.Category?.select?.name?.toLowerCase() || "other",
        techStack: props.TechStack?.multi_select?.map((s: any) => s.name) || [],
      };
    });
  } catch (error) {
    console.warn("Failed to fetch Projects from Notion, using fallback.", error);
    return fallbackProjects;
  }
};

// ---------------------------------------------------------------------------
// 2. Experiences
// ---------------------------------------------------------------------------
export const getExperiences = async (): Promise<Experience[]> => {
  const dbId = process.env.NOTION_EXPERIENCE_DB_ID;
  if (!isConfigured(dbId)) return fallbackExperiences;

  try {
    // @ts-ignore
    const response = await (notion as any).dataSources.query({
      data_source_id: dbId!,
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        role: props.Role?.title?.[0]?.plain_text || "Untitled",
        company: props.Company?.rich_text?.[0]?.plain_text || "",
        type: props.Type?.select?.name || "",
        period: props.Period?.rich_text?.[0]?.plain_text || "",
        location: props.Location?.rich_text?.[0]?.plain_text || "",
        bullets: props.Bullets?.rich_text?.[0]?.plain_text?.split("\n").filter((b: string) => b.trim()) || [],
      };
    });
  } catch (error) {
    console.warn("Failed to fetch Experiences from Notion, using fallback.", error);
    return fallbackExperiences;
  }
};

// ---------------------------------------------------------------------------
// 3. Currently Section (New Feature)
// ---------------------------------------------------------------------------
export interface CurrentlyItem {
  category: "Building" | "Learning" | "Reading";
  title: string;
  description: string;
  link?: string;
}

const fallbackCurrently: CurrentlyItem[] = [
  { category: "Building", title: "Logers.Watch", description: "A Web3 watch-to-earn streaming platform." },
  { category: "Learning", title: "web3 security", description: "Diving deep into web3 security." },
  { category: "Reading", title: "Mastering Ethereum", description: "Understanding the EVM under the hood." },
];

export const getCurrentlyItems = async (): Promise<CurrentlyItem[]> => {
  const dbId = process.env.NOTION_CURRENTLY_DB_ID;
  if (!isConfigured(dbId)) return fallbackCurrently;

  try {
    // @ts-ignore
    const response = await (notion as any).dataSources.query({
      data_source_id: dbId!,
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        category: props.Category?.title?.[0]?.plain_text || "Learning",
        title: props.Title?.rich_text?.[0]?.plain_text || "",
        description: props.Description?.rich_text?.[0]?.plain_text || "",
        link: props.Link?.url || undefined,
      };
    });
  } catch (error) {
    console.warn("Failed to fetch Currently items from Notion, using fallback.", error);
    return fallbackCurrently;
  }
};

console.log(getCurrentlyItems());

// ---------------------------------------------------------------------------
// 4. Skills
// ---------------------------------------------------------------------------
export interface SkillCategory {
  title: string;
  skills: string[];
}

const fallbackSkills: SkillCategory[] = [
  { title: "Web3 & Smart Contracts", skills: ["Solidity", "Foundry", "Chainlink CCIP", "ERC-20", "ERC-721", "DeFi", "EIP-712"] },
  { title: "Frontend", skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "GSAP", "Vite"] },
  { title: "Backend", skills: ["Node.js", "Bun", "Express.js", "PostgreSQL", "Prisma ORM", "GraphQL"] },
  { title: "Tools & Others", skills: ["Git", "GitHub", "Docker", "Vercel", "Linux", "CLI Tools"] },
];

export const getSkills = async (): Promise<SkillCategory[]> => {
  const dbId = process.env.NOTION_SKILLS_DB_ID;
  if (!isConfigured(dbId)) return fallbackSkills;

  try {
    // @ts-ignore
    const response = await (notion as any).dataSources.query({ data_source_id: dbId!, sorts: [{ property: "Order", direction: "ascending" }] });
    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        title: props.Category?.title?.[0]?.plain_text || "Other",
        skills: props.Skills?.multi_select?.map((s: any) => s.name) || [],
      };
    });
  } catch (error) { return fallbackSkills; }
};

// ---------------------------------------------------------------------------
// 5. About Stats
// ---------------------------------------------------------------------------
export interface AboutData {
  name: string;
  role: string;
  bio: string;
  location: string;
  expNumber: string;
  projNumber: string;
}

const fallbackAbout: AboutData = {
  name: "Atul Thakre",
  role: "Full Stack & Web3 Developer",
  bio: "I am a Web3 Buidler and Full-Stack Developer dedicated to bridging the gap between traditional web efficiency and decentralized innovation. My foundation is the PERN stack with Next.js & TypeScript for seamless, type-safe experiences. Within the Ethereum ecosystem, I specialize in Solidity and Foundry — crafting secure smart contracts for real-world utility.",
  location: "Nagpur, India",
  expNumber: "2+",
  projNumber: "10+",
};

export const getAboutData = async (): Promise<AboutData> => {
  const dbId = process.env.NOTION_ABOUT_DB_ID;
  if (!isConfigured(dbId)) return fallbackAbout;

  try {
    // @ts-ignore
    const response = await (notion as any).dataSources.query({ data_source_id: dbId! });
    const page = response.results[0] as any;
    if (!page) return fallbackAbout;
    const props = page.properties;
    return {
      name: props.Name?.title?.[0]?.plain_text || fallbackAbout.name,
      role: props.Role?.rich_text?.[0]?.plain_text || fallbackAbout.role,
      bio: props.Bio?.rich_text?.[0]?.plain_text || fallbackAbout.bio,
      location: props.Location?.rich_text?.[0]?.plain_text || fallbackAbout.location,
      expNumber: props.ExpNumber?.rich_text?.[0]?.plain_text || fallbackAbout.expNumber,
      projNumber: props.ProjNumber?.rich_text?.[0]?.plain_text || fallbackAbout.projNumber,
    };
  } catch (error) { return fallbackAbout; }
};

// ---------------------------------------------------------------------------
// 6. Education Data
// ---------------------------------------------------------------------------
export interface EducationData {
  institution: string;
  subtitle: string;
  period: string;
  degree: string;
  status: string;
  coursework: string[];
  tags: string[];
}

const fallbackEducation: EducationData = {
  institution: "Yeshwantrao Chavan College of Engineering",
  subtitle: "YCCE, Nagpur — Affiliated to RTMNU",
  period: "2023 – 2027",
  degree: "B.E. — Computer Science & Engineering (AI & ML)",
  status: "3rd Year — Ongoing",
  coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Computer Networks", "Object-Oriented Programming (Java)", "Artificial Intelligence"],
  tags: ["CSE Branch", "Full-time"],
};

export const getEducationData = async (): Promise<EducationData> => {
  const dbId = process.env.NOTION_EDUCATION_DB_ID;
  if (!isConfigured(dbId)) return fallbackEducation;

  try {
    // @ts-ignore
    const response = await (notion as any).dataSources.query({ data_source_id: dbId! });
    const page = response.results[0] as any;
    if (!page) return fallbackEducation;
    const props = page.properties;
    return {
      institution: props.Institution?.title?.[0]?.plain_text || fallbackEducation.institution,
      subtitle: props.Subtitle?.rich_text?.[0]?.plain_text || fallbackEducation.subtitle,
      period: props.Period?.rich_text?.[0]?.plain_text || fallbackEducation.period,
      degree: props.Degree?.rich_text?.[0]?.plain_text || fallbackEducation.degree,
      status: props.Status?.rich_text?.[0]?.plain_text || fallbackEducation.status,
      coursework: props.Coursework?.multi_select?.map((s: any) => s.name) || fallbackEducation.coursework,
      tags: props.Tags?.multi_select?.map((s: any) => s.name) || fallbackEducation.tags,
    };
  } catch (error) { return fallbackEducation; }
};
