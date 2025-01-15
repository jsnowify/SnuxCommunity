const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 text-sm  w-40 text-[#ECDFCC] bg-[#181C14] border-[#181C14] rounded-lg shadow-md hover:bg-[#3C3D37] hover:shadow-lg transition duration-100 ease-in-out">
        {name}
      </button>
    </div>
  );
};

export default Button;
