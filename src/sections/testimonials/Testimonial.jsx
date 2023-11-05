import Card from "../../components/Card";

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="  flex cursor-grab flex-col items-start gap-[1rem] rounded-[--border-radius-1] border-2 border-solid border-transparent bg-[--color-light]   p-[1rem] transition-[--transition] hover:translate-y-[-0.5rem] hover:border-[2px] hover:border-slate-50 hover:bg-transparent">
      <p>{testimonial.quote}</p>
      <div className="  flex flex-row items-center gap-[1rem] pt-[1rem] ">
        <div className=" w-[5rem] overflow-hidden rounded-[--border-radius-2] transition-[--transition] ">
          <img src={testimonial.avatar} alt="" />
        </div>
        <div className="">
          <h6 className=" font-bold">{testimonial.name}</h6>
          <small>{testimonial.profession}</small>
        </div>
      </div>
    </Card>
  );
};

export default Testimonial;
