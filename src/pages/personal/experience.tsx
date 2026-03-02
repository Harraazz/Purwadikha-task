// import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Exp {
  judul: string;
  desc: string;
}

const exp: Exp[] = [
  {
    judul: "Full-Stack Developer — PT Digital Kreasi Indonesia",
    desc: "2023 - Present\n\nResponsible for developing and maintaining full-stack web applications using React.js, Next.js, and Laravel. Designed RESTful APIs, managed databases (MySQL), and implemented authentication systems. Collaborated with UI/UX designers and ensured responsive, scalable, and secure application architecture.",
  },
  {
    judul: "Frontend Developer — CV Tech Solution",
    desc: "2022 - 2023\n\nDeveloped responsive web interfaces using React.js and Tailwind CSS. Integrated backend APIs, optimized website performance, and improved user experience across multiple devices. Worked closely with backend engineers to ensure seamless data flow.",
  },
  {
    judul: "Freelance Web Developer — Self-Employed",
    desc: "2021 - Present\n\nBuilt custom websites for clients including company profiles, dashboards, and e-commerce platforms. Managed full project lifecycle from requirement gathering to deployment. Implemented authentication, CRUD systems, and payment gateway integration.",
  },
  {
    judul: "Junior Web Developer — Startup XYZ",
    desc: "2021 - 2022\n\nAssisted in developing internal management systems using PHP and JavaScript. Maintained existing codebase, fixed bugs, and improved system performance. Gained hands-on experience in version control (Git) and agile development workflow.",
  },
];

function Experience() {
  return (
    <div className="p-4">
      <div className="flex flex-row text-4xl justify-center p-4 font-bold text-[#FAEB92]  bg-[#92487A]">
        EXPERIENCE
      </div>
      <div className="flex flex-col border-4 border-[#92487A] p-4 mt-2">
        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="w-full">
          {exp.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg">
                {item.judul}
              </AccordionTrigger>
              <AccordionContent className="text-md">
                {item.desc}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Experience;
