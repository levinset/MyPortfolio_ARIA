const Card = ({ children, className, onClick }) => {
  return (
    <article className={className} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;

//rounded-[--border-radius-1] border-2 border-solid border-transparent bg-[--color-white] p-[1rem]  text-center transition-[--transition] hover:translate-y-[-0.5rem] hover:border-[2px] hover:border-slate-50 hover:bg-transparent
