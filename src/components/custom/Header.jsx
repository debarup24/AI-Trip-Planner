import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-4 shadow-sm shadow-green-300 flex justify-between items-center px-10">
      <img src=" /logo.svg " alt="logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
