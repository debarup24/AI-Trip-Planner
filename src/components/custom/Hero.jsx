import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-5xl text-center p-2 mt-16 ">
        {" "}
        <span className="text-[#f56551] ">
          {" "}
          Discover Your Next Adventure with AI :
        </span>{" "}
        <br />
        Personalized Itineraries at Your Fingertrips{" "}
      </h1>
      <p className="text-xl text-center text-gray-600">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Hero;
