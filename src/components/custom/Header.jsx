import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-4 w-full shadow-sm shadow-gray-200 flex justify-between items-center px-10">
      <img src=" /logo.svg " alt="logo" />
      <div className="flex flex-row">
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
