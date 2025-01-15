const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border w-80 p-2 border-[#181C14] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#181C14] focus:border-transparent shadow-sm transition-all"
    />
  );
};

export default Input;
