import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className=" container mt-[3rem] grid grid-cols-3 items-center gap-[3rem] max-md:grid-cols-1 ">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
