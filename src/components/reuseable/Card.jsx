const Card = ({ children, className }) => {
  return <div className={`w-auto rounded-[10px] ${className}`}>{children}</div>;
};

export default Card;
