// import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardPorto from "@/components/CardPorto";

const data = [
  {
    id: "react-native",
    title: "React Native Project",
    description: "Making a interactieve website for client",
    badge: "Featured",
  },
  {
    id: "laravel-project",
    title: "Laravel Project",
    description: "Make a website for client faster with laravel",
    badge: "Featured",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    description: "Make a beautyful Design for client",
    badge: "Featured",
  },
  {
    id: "nextjs-project",
    title: "Next.js Project",
    description: "A framework that relevant to web development",
    badge: "Featured",
  },
];
function portofolio() {
  return (
    <div className=" My-font px-3 mt-3" id="Porto">
      <div className="scrollbar">
        <ScrollArea className="w-full rounded-md p-4">
          <div className="flex gap-4 w-full">
            {data.map((card) => (
              <CardPorto
                key={card.id}
                title={card.title}
                description={card.description}
                badge={card.badge}
                id={`/detail/${card.id}`}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default portofolio;
