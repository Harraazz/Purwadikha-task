import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Working with Yusuf was an amazing experience. The project was delivered on time and exceeded expectations.",
    name: "Jonathan Miller",
    role: "CEO at Tech Startup",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote:
      "Highly professional and very communicative. The final product quality was outstanding.",
    name: "Sarah Williams",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote:
      "Creative, detail-oriented, and fast delivery. I would definitely collaborate again.",
    name: "Michael Chen",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#92487A] ">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-6xl font-bold My-font text-[#FAEB92] tracking-tight">
          What Clients Say
        </h2>
        <p className="text-white My-font mt-3 text-2xl">
          Real feedback from people I’ve worked with
        </p>
      </div>

      <Carousel opts={{ loop: true }} className="max-w-6xl mx-auto">
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index}>
              <div className="bg-background shadow-xl rounded-3xl p-12 md:p-16 text-center">
                <p className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed mb-10">
                  “{item.quote}”
                </p>

                <div className="flex flex-col items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />

                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
