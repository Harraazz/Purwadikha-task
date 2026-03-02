// import React from "react";

interface Skill {
  name: string;
}

interface values {
  name: string;
}

const val: values[] = [
  {
    name: "Timeliness Consistently meeting deadlines and respecting project timelines.",
  },
  {
    name: "Attention to Detail Writing clean, well-structured, and reliable code.",
  },
  {
    name: "Clear Communication Ensuring transparency and clarity throughout the development process.",
  },
];
const skills: Skill[] = [
  { name: "Javascript" },
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "Node.js" },
  { name: "PHP" },
  { name: "Mysql" },
  { name: "laravel" },
  { name: "UI/UX" },
  { name: "C" },
  { name: "Unity" },
  { name: "Next.js" },
  { name: "Git Versioning" },
  { name: "Send me a message when you ready!" },
];
function about() {
  return (
    <div className="flex-col px-3 My-font" id="About">
      <div className="grid grid-cols-3 gap-3 pt-4">
        <div className="container col-span-2  ">
          <div className="container border-[#92487A] border-3 border-b-8 text-4xl font-bold">
            <div className="p-4 ">ABOUT ME</div>
          </div>
          <div className="border-[#92487A] border-3 mt-2 ">
            <div className="px-3 py-3">
              <p className="text-2xl">
                I am a student at Asia e University with a strong passion for
                technology. I have a deep interest in software development and
                continuously improve my skills through academic studies and
                hands-on experience. In addition to my formal education, I have
                completed a professional program in Software Engineering to
                further strengthen my technical expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="container border-[#92487A] border-3 border-b-8 text-4xl font-bold">
            <div className="p-4">Core Skills</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="border-2 border-[#92487A] text-lg px-4 py-1 inline-flex w-fit">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-col border-4 border-[#92487A] mt-3">
        <div className="font-bold text-4xl p-4">Key Values</div>
        <div className="flex gap-2 m-3 ">
          {val.map((value) => (
            <div
              className="border-2 border-[#92487A] text-lg px-4 py-1 inline-flex w-fit hover:bg-amber-200 hover:border-b-8 hover:border-s-4 transition-all duration-300 ease-in-out"
              key={value.name}>
              {value.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default about;
