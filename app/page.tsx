import HomeClient from "./HomeClient";
import {
  getAboutData,
  getCurrentlyItems,
  getEducationData,
  getExperiences,
  getProjects,
  getSkills,
} from "@/lib/notion";

// Force Next.js to dynamically render or revalidate if needed.
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  // Fetch everything concurrently from Notion / Fallbacks
  const [about, skills, education, experiences, projects, currently] = await Promise.all([
    getAboutData(),
    getSkills(),
    getEducationData(),
    getExperiences(),
    getProjects(),
    getCurrentlyItems(),
  ]);

  const initialData = {
    about,
    skills,
    education,
    experiences,
    projects,
    currently,
  };

  return <HomeClient initialData={initialData} />;
}
