import ImageHeader from "../../assets/Images/Header.jpg";
import ProfileUrl from "../../assets/logo/Logo.png";
import socials from "./data";

const Header = () => {
  return (
    <header
      className=" relative mt-5  h-[100vh] overflow-hidden  bg-cover bg-no-repeat p-12 text-center max-md:mt-0  "
      // style={{ backgroundImage: `url(${ImageHeader})` }}
      id="header"
    >
      <div className=" absolute bottom-0 left-0 right-0 top-10 h-full w-full overflow-hidden bg-fixed">
        <div className=" flex h-full flex-col items-center justify-center">
          {/* <img src={ImageHeader} alt="Header Image" /> */}
          <div className=" mb-5 h-[20rem]  w-[20rem]  overflow-hidden ">
            <img
              className=" overflow-hidden rounded-b-[2rem] rounded-t-[9rem] "
              src={ImageHeader}
              alt="Profile Photo"
            />
          </div>
          <div className=" font-sans text-black">
            <h3 className=" mb-5  text-[2rem] font-semibold uppercase max-sm:text-[1.8rem]  ">
              Moein Kermanizadeh Tavakoli
            </h3>
            <p className="mb-10 text-[1rem] font-semibold text-black max-sm:mb-8 max-sm:text-lg">
              You are a click away from building your dream website
            </p>
            <div className=" max-sm: flex flex-row items-center justify-center space-x-5 max-sm:flex-col max-sm:justify-items-center max-sm:space-x-0 max-sm:space-y-3">
              <a
                className=" rounded-lg border-2 border-black px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out  hover:border-neutral-100 hover:bg-[--color-primary] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-opacity-10"
                href="#contact"
                aria-label="lets talk"
              >
                Lets Talk
              </a>
              <a
                className=" rounded-lg border-2 border-black px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out  hover:border-neutral-100 hover:bg-[--color-primary] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-opacity-10 "
                href="#portfolio"
              >
                My Works
              </a>
            </div>
            <div className=" mt-[2rem] flex flex-row items-center justify-center space-x-[2rem] ">
              {socials.map((item) => (
                <a
                  className=" scale-[200%] items-center justify-center text-center text-black hover:scale-[300%] "
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="social contact"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
