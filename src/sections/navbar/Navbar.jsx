import { list } from "postcss";
import LogoUrl from "../../assets/logo/Logo.png";
import data from "./data";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handelMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className=" fixed left-0 top-0 z-10 grid h-[7rem] w-[100vw] items-center bg-[--color-primary]  max-md:h-[3.5rem] ">
      <div className="container flex items-center justify-between ">
        <a
          className=" w-[5rem] overflow-hidden rounded-full max-md:w-[2.5rem] "
          href="index.html"
        >
          <img src={LogoUrl} alt="Logo" />
        </a>
        <div>
          <ul className=" flex gap-[3.5rem] text-[1.2rem]  max-lg:hidden">
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" -mr-2 flex md:hidden">
          <button
            className=" focuse:outline-none inline-flex items-center justify-center rounded-md p-2  text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
            type=" button"
            onClick={handelMenu}
          >
            <span className=" sr-only  "> open main menu </span>
            {open == true ? <FaTimes className="" /> : <FaBars />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className=" ox-2 space-y-1 bg-[--color-primary] pb-3 pt-2 text-center sm:px-3 ">
            {data.map((item) => (
              <li key={item.id}>
                <a
                  className=" text-md block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition-all duration-500 hover:bg-gray-700 hover:text-white "
                  href={item.link}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
