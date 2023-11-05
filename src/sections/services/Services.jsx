import data from "./data";
import Card from "../../components/Card";

const Services = () => {
  return (
    <section className="" id="services">
      <h2 className=" font-bold">My Services</h2>
      <p>I give you the best in all services below</p>
      <div className=" container grid  grid-cols-2 gap-[2rem]  max-md:grid-cols-1 max-md:gap-[1.5rem]">
        {data.map((item) => (
          <Card
            key={data.id}
            className={
              "group/edit flex items-start gap-[1rem] rounded-[--border-radius-1] border-2 border-solid border-transparent bg-[--color-light]   p-[1rem] transition-[--transition] hover:translate-y-[-0.5rem] hover:border-[2px] hover:border-slate-50 hover:bg-transparent"
            }
          >
            {/* <div className="flex items-start gap-[1rem] "> */}
            <div className=" rounded-lg bg-[--color-primary] p-[0.6rem] text-[1.5rem] text-white transition-[--transition]  group-hover/edit:bg-[--color-light] group-hover/edit:text-[--color-primary] ">
              {item.icon}
            </div>
            <div className=" flex flex-col items-start">
              <h4 className=" mb-[0.7rem] font-bold "> {item.title} </h4>
              <p>{item.desc} </p>
            </div>
            {/* </div> */}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
