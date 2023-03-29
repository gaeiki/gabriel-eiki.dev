import projects from "../../json/projects.json";

export default function PortfolioCard() {
  return (
      <div className="md:flex flex-wrap gap-5 justify-center mt-10 hidden">
        {projects.map((project, i) => (
          <div className="w-96 p-4 bg-slate-500 dark:bg-slate-800 rounded-xl hover:scale-105 duration-300" key={i}>
            <a href={project.live_link} target="_blank">
              <img
                src={project.img}
                alt={project.name}
                className="rounded-lg cursor-pointer h-44"
                title={project.name}
              />
            </a>
            <h3 className="text-xl text-gray-800 my-3 dark:text-gray-100">
              {project.name}
            </h3>
            <div className="flex gap-3">
              <a
                href={project.github_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 dark:bg-gray-300 px-2 py-1 inline-block rounded-md hover:bg-gray-800/50 dark:hover:bg-gray-300/10 duration-300"
              >
                Source Code
              </a>
              <a
                href={project.live_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 dark:bg-gray-300 px-2 py-1 inline-block rounded-md hover:bg-gray-800/50 dark:hover:bg-gray-300/10 duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
  );
}
