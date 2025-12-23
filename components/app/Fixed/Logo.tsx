import React from "react";

const Logo = () => {
  return (
    <nav className="fixed z-50 top-0 left-0 w-full">
      <div className="w-full md:w-[90%] mx-auto p-1 md:p-2">
        <div className="bg-black w-max p-1 md:p-2 bg-blend-difference">
          <h1 className="text-3xl md:text-5xl font-mono  font-extrabold text-white mix-blend-difference">
            LG.
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Logo;
