import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardPorto from "./CardPorto";

const data = [
  {
    title: "React Native Project",
    description: "Making a interactieve website for client",
    badge: "Featured",
  },
  {
    title: "React Native Project",
    description: "Making a interactieve website for client",
    badge: "Featured",
  },
  {
    title: "React Native Project",
    description: "Making a interactieve website for client",
    badge: "Featured",
  },
];
function Carrousel() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {data.map((card, index) => (
              <CardPorto
                key={index}
                title={card.title}
                description={card.description}
                badge={card.badge}
              />
            ))}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Carrousel;
