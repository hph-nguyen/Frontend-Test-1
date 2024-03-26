const Card = ({ children, className }) => {
  return <div className={`w-auto rounded-[10px] p-10 ${className}`}>{children}</div>;
};

export default Card;
