import Hero from "@/components/Company/Hero";
import { Button } from "@/components/ui/button";
import CardPerson from "@/components/Company/CardPerson";
const cards = [
  {
    gambar: "/img/arsitek.jpg",
    header: "Meet me",
    desc: "Lorem Ipsum",
    badge: "Architek",
  },
  {
    gambar: "/img/arsitek.jpg",
    header: "Meet me",
    desc: "Lorem Ipsum",
    badge: "Architek",
  },
  {
    gambar: "/img/arsitek.jpg",
    header: "Meet me",
    desc: "Lorem Ipsum",
    badge: "Architek",
  },
];
function Home() {
  return (
    <div>
      <Hero />
      <section className="p-20 space-y-10">
        <div className="space-y-3 flex flex-col ">
          <h1 className="text-4xl font-bold">About The Company</h1>
          <p className="text-xl">
            Founded with a passion for quality construction, our company has
            successfully delivered residential projects ranging from modern
            minimalist homes to luxury custom villas. We prioritize structural
            integrity, smart design, and timely project completion. With years
            of experience in the construction industry, we have built a strong
            reputation based on reliability, professionalism, and attention to
            detail. Our projects span various residential developments and
            private home constructions.
          </p>
        </div>
      </section>
      <section className="flex flex-col p-20 space-y-20">
        <div className="flex justify-center text-4xl text-center font-bold ">
          We are a professional construction company specializing in residential
          home development, renovations, and custom-built properties tailored to
          your vision.
        </div>
        <div className="relative w-full">
          <img
            src="/img/perum.png"
            alt="banner2"
            className="w-full object-cover rounded-2xl"
          />
          <div className="absolute top-[85%] left-[70%] transform-translate-x-1/2">
            <Button className="bg-amber-950 text-3xl p-8">
              Free Consultation Here
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-[#353131] p-20">
        <div className="flex gap-10 items-center">
          {/* Kiri - Gambar */}
          <div className="w-1/3 flex flex-col justify-center ">
            <img
              src="/img/MEET.png"
              alt="banner"
              className="object-contain w-80"
            />
          </div>

          {/* Kanan - Cards */}
          <div className="w-full grid grid-cols-4 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <CardPerson
                key={card.header}
                gambar={card.gambar}
                header={card.header}
                desc={card.desc}
                badge={card.badge}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
