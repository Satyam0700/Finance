const Button = ({label}) => {
  return (
    <button
      type="button"
      className={`md:py-4 py-3 font-poppins font-medium text-[15px] md:text-[18px] text-[#00040f] outline-none bg-blue-gradient rounded-[10px] md:px-6 px-4 bg-blue-gradient`}
    >
      {label}
    </button>
  );
};

export default Button;
