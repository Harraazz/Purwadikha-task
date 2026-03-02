// import React from "react";
import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <div
      className="flex justify-center gap-10 bg-[#92487A] items-center My-font"
      id="Hero">
      <div className="container flex justify-center  items-center">
        <div className="text text-white max-w-2xl ">
          <h1 className="text-6xl">
            im,
            <span className="font-extrabold text-[#FAEB92] ">
              Yusuf Budiansyah
            </span>
          </h1>
          <h2 className="text-5xl">Website Developer</h2>
          <p className="pt-5 text-2xl">
            Building scalable and high-performance web solutions tailored to
            your business needs.
          </p>
          <div className="container flex items-center pt-5 ">
            <Button className="mb-4 text-4xl h-15 font-bold text-white w-full">
              Want to connect?
            </Button>
          </div>
        </div>
        <div className="foto">
          <img
            src="/img/ucup2.png"
            alt="Yusuf Budiansyah"
            className="w-120 h-180"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
