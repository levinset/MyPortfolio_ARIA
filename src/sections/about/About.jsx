import AboutUrl from "../../assets/Images/About.jpg";
import CV from "../../assets/CV.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";

const About = () => {
  return (
    <section id="about">
      <div className=" container grid grid-cols-2 gap-[12%] max-md:grid-cols-1 ">
        <div className=" h-fit max-h-[40rem] border-[1rem] transition-[--transition]  hover:border-0 max-md:hidden ">
          <img src={AboutUrl} alt="About Img" />
        </div>
        <div className="max-md:flex max-md:flex-col max-md:content-center max-md:justify-center max-md:text-center ">
          <h1 className=" max-md:content-center max-md:justify-center max-md:text-center">
            About Me
          </h1>
          <div className=" mx-0 mb-[1.5rem] mt-[3rem] grid grid-cols-3 content-center items-center justify-center gap-[1.5rem] text-center max-md:grid-cols-1">
            {data.map((item) => (
              <Card
                className={
                  " rounded-[--border-radius-1] border-2 border-solid border-transparent bg-[--color-white] p-[1rem]  text-center transition-[--transition] hover:translate-y-[-0.5rem] hover:border-[2px] hover:border-slate-50 hover:bg-transparent"
                }
                // className=" flex content-center justify-center text-center"
                key={item.id}
              >
                <span className=" m-auto  flex w-fit items-center p-[0.6rem] text-[1.3rem] text-[--color-black] ">
                  {item.icon}
                </span>
                <h2 className=" m-y-[1rem] m-x-0 font-bold "> {item.title} </h2>
                <small> {item.desc} </small>
              </Card>
            ))}
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dignissimos reprehenderit sit ducimus obcaecati veniam deleniti
            itaque eum animi quod, laboriosam nihil natus pariatur! Dolore at
            labore aspernatur maxime asperiores?
          </p>
          <p className=" mb-[1rem] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo
            et excepturi in incidunt, est, cumque assumenda quia facere nihil
            dolorum at veritatis corporis. Repudiandae eos et dicta neque quod.
          </p>
          <div>
            <a
              className=" mt-[2rem] flex flex-row justify-center gap-2 rounded-lg border-2 border-black px-7  pb-[8px] pt-[10px]  text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out  hover:border-neutral-100 hover:bg-[--color-primary] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-opacity-10"
              href={CV}
              aria-label="download cv"
              download
            >
              Download CV <HiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
