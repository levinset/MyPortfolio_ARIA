import { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectsCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className=" flex flex-row justify-center gap-[1rem] max-md:m-auto max-md:flex-col max-md:justify-center max-sm:items-center ">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          className={
            " hover:text-neutral w-[8rem] rounded-lg border-2 border-black px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-black transition duration-150  ease-in-out hover:border-neutral-100 hover:bg-[--color-primary] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100  focus:bg-[--color-primary] focus:bg-opacity-10 dark:hover:bg-opacity-10  "
          }
          onChangeCategory={() => changeCategoryHandler(category)}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
