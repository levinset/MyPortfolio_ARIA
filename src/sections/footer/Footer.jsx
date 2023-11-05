import { links, socials } from "./data";

const Footer = () => {
  return (
    <footer className=" bg-[--color-primary] pt-[8rem] shadow-lg transition-[--transition] ">
      <div className="container">
        <ul className=" flex justify-center gap-[1.5rem] max-md:hidden ">
          {links.map((fLink) => (
            <li key={fLink.id}>
              <a href={fLink.link}>{fLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="  m-[3rem_auto_4rem] flex w-fit content-center items-center justify-center gap-[1.5rem] ">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-lg  bg-black  p-[0.6rem] text-white hover:translate-y-[-0.5rem] hover:opacity-[0.7rem] "
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="  border-t-2 p-[1.5rem_0] text-center text-white ">
        <small>2023 MOEIN PROFILES &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
