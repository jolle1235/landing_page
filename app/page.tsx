import AboutMe from "./components/AboutMe";
import DownloadCV from "./components/Download";
import projects from "./data/projects.json";

export default function Home() {
  return (
    <div className="bg-background h-full w-full p-5 flex flex-col items-center justify-center gap-4">
      <AboutMe />
      <DownloadCV />
      <div className="flex flex-col gap-2 w-full max-w-lg border border-foreground/10 p-2 rounded-lg">
        {projects.map((project, index) => (
          <h2 key={index} className="p-2 rounded-lg bg-secondaryBackground">
            {project.title}
          </h2>
        ))}
      </div>
    </div>
  );
}
