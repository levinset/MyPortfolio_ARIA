import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  // console.log(categories);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(
      (project) => project.category === category,
    );
    setProjects(filterProjects);
  };

  return (
    <section
      className=" max-md:m-auto max-md:flex max-md:flex-col max-md:content-center "
      id="portfolio"
    >
      <h2 className=" mb-[1rem] font-bold">Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories.
      </p>
      <div className="">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
