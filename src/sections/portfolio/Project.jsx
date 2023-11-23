import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className=" rounded-[--border-radius-1] border-2 border-solid border-transparent bg-[--color-white] p-[1rem]  text-center transition-[--transition] hover:translate-y-[-0.5rem] hover:border-[2px] hover:border-slate-50 hover:bg-transparent">
      <div className=" mb-[1.5rem] h-fit max-h-[15rem] min-h-[7rem] w-[100%] overflow-hidden rounded-[--border-radius-2] bg-[--color-light]   ">
        <img src={project.image} alt=" Project Image" />
      </div>
      <h2 className=" mb-[1rem] font-bold ">{project.title}</h2>
      <p className=" mb-[1rem] ">{project.desc}</p>
      <div className=" flex flex-row justify-center gap-2">
        <a
          href={project.demo}
          className="rounded-lg border-2 border-black px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out  hover:border-neutral-100 hover:bg-[--color-primary] hover:bg-opacity-10 hover:text-neutral-100   dark:hover:bg-opacity-10"
          target="_blank"
          rel="noopner noreferrer"
          aria-label="project demo"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="rounded-lg border-2 border-black px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out  hover:border-neutral-100 hover:bg-[--color-primary] hover:bg-opacity-10 hover:text-neutral-100  dark:hover:bg-opacity-10"
          target="_blank"
          rel="noopner noreferrer"
          aria-label="project github"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;
