import { useState } from "react";

const NavBar = () => {
  const navbarNames = ["Home", "Feature", "Threads", "Friends"];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="flex justify-center items-center mt-5">
      <ul className="flex gap-8 items-center">
        {navbarNames.map((navbarName, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer ease-in-out duration-150 transition-all ${
              activeIndex === index
                ? "text-[#181C14] underline"
                : "text-[#3C3D37] hover:text-[#697565]"
            }`}
          >
            {navbarName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
