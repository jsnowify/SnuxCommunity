const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 w-40 text-white bg-[#3E5879] border-[#3E5879] rounded-lg shadow-md hover:bg-[#2d435e] hover:shadow-lg transition duration-300 ease-in-out">
        {name}
      </button>
    </div>
  );
};

export default Button;
