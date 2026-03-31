import { MagicCard } from "@/components/ui/magic-card";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCardProps } from "@/types";
import GitHubRepoCard from "./GitHubRepoCard";
import {
  ChevronRight,
  Github,
  Link,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ details }: ProjectCardProps) => {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-sm border-none p-0 shadow-none">
        <MagicCard className="p-0">
          <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
            <CardTitle> {details.name}</CardTitle>
            <CardDescription>
              {/* <p>{details.description || "No description provided"}</p> */}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 relative z-0 flex flex-col gap-4">
            <p>{details.description || "No description provided"}</p>
            {details.techStack && details.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {details.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-[10px] md:text-xs font-mono rounded-full bg-foreground/5 border border-border/10 text-foreground/80 hover:bg-foreground/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
          <div className="flex text-sm justify-between px-3 pb-3 text-foreground/60">
            {details.url ? (
              <div>
                <a href={details.url}>
                  <div className="flex items-center gap-2 hover:text-foreground hover:underline">
                    <Link size={15} /> Live Demo
                  </div>
                </a>
              </div>
            ) : (
              <div className="cursor-not-allowed">
                <div className="flex items-center gap-2 line-through">
                  <Link size={15} /> Live Demo
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 hover:text-foreground cursor-pointer">
              Read more <ChevronRight size={15} />
            </div>
          </div>
          <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="flex gap-2 items-center">
                <Github size={18} /> Github -
              </div>
              <GitHubRepoCard repoUrl={details.github} />
            </div>
          </CardFooter>
        </MagicCard>
      </Card>
    </div>
  );
};

export default ProjectCard;
