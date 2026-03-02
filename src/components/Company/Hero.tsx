function Hero() {
  return (
    <section className="grid grid-cols-3  bg-[#353131] items-center">
      <div className="col-span-1 space-y-3 p-20 text-white">
        <div className="text-4xl font-bold">
          We Build More Than Houses — We Build Dreams
        </div>
        <div className="text-3xl font-serif">
          Building Your Dream Home with Quality and Trust
        </div>
        <div className="mt-16">By | Dreamable</div>
      </div>

      <div className="col-span-2 flex justify-center ">
        <img src="/img/perum.png" alt="logo" className="w-full object-cover" />
      </div>
    </section>
  );
}

export default Hero;
