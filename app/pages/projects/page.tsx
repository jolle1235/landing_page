import projects from "../../data/projects.json";
import ProjectCard from "../../components/Project";

export default function ProjectsPage() {
  return (
    <main className="w-full px-4 py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>

      <div className="w-full max-w-3xl gap-4 flex flex-col justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            experiences={project.experiences}
            technologies={project.technologies}
          />
        ))}
      </div>
    </main>
  );
}
