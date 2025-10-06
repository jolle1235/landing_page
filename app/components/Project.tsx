"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  experiences: string[];
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  experiences,
  technologies,
}: ProjectProps) {
  return (
    <div className="h-fit w-full bg-background text-foreground rounded-xl shadow-md p-6 border border-foreground/10">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="font-semibold mb-1">Experience:</h4>
        <ul className="list-disc list-inside space-y-1">
          {experiences.map((exp, index) => (
            <li key={index} className="">
              {exp}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-1">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-lg bg-secondaryBackground text-foreground/90 border border-foreground/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
