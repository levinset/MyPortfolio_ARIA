import contacts from "./data";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div className=" max-md:g-[1.5rem] container flex w-fit justify-center gap-[3rem]">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            aria-label="cantact"
            target="_blank"
            rel="noopener noreferrer"
            className=" grid h-[5rem] w-[5rem] items-center justify-center overflow-hidden rounded-[1rem] border-2 border-solid border-transparent bg-[--color-primary] text-[2rem] text-white hover:translate-y-[-0.5rem] hover:border-[--color-primary] hover:bg-transparent hover:text-[--color-primary] max-md:h-[2.5rem]  max-md:w-[2.5rem] "
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
