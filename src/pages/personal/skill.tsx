import { useState } from "react";

interface Skill {
  logo: string;
  desc: string;
}

const val: Skill[] = [
  {
    logo: "/img/1.png",
    desc: "React for Front-end Development",
  },
  {
    logo: "/img/2.png",
    desc: "Its a basic for the website developer right?",
  },
  {
    logo: "/img/3.png",
    desc: "Nah, Its for better styling my website!",
  },
  {
    logo: "/img/4.png",
    desc: "Ofcourse, Its for better performance my website!",
  },
  {
    logo: "/img/5.png",
    desc: "To Avoid some mistake when i working with my mate! Git Versioning",
  },
  {
    logo: "/img/6.png",
    desc: "Devops tools, Thats it",
  },
];

function Skill() {
  const [active, setActive] = useState<string>(
    "Hover a logo to see description",
  );
  return (
    <div className="px-3 flex-row items-center">
      <div className="flex justify-center items-center My-font bg-[#92487A]  mt-3 text-3xl p-4 font-bold text-[#FAEB92]">
        What I Learn About The Technologies
      </div>
      <div className="grid grid-cols-6 gap-7 border-[#92487A] border-4 p-4 mt-3 ">
        {val.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(item.desc)}
            onMouseLeave={() =>
              setActive("Hover the logo to see the description")
            }
            className="flex justify-center items-center bg-[#92487A] rounded-md mt-3 hover:bg-amber-200 cursor-po  hover:scale-105 transition">
            <img
              src={item.logo}
              alt={`skill-${index}`}
              className="w-30 h-30 object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center My-font bg-[#92487A]  mt-3 text-3xl p-4 font-bold text-[#FAEB92]">
        {active}
      </div>
    </div>
  );
}

export default Skill;
