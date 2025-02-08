const Hero = () => {
  return (
    <section className="bg-heroImage bg-no-repeat bg-cover bg-center h-[36rem] mt-4 rounded-[32px] flex flex-col justify-center items-center">
      <div className="max-w-[54rem] flex flex-col justify-center items-center">
        <h1 className="text-light sm:text-headerOne text-headerTwo text-center">
          Beyond the Courtroom
        </h1>
        <h2 className="max-w-[26rem] text-paraOne text-light text-center mt-3 font-roboto">
          Explore the synergy of law, cricket, and administration, uncover
          authoritative commentary, and let our passion for insight enhance your
          understanding.
        </h2>
        <button className="mt-10 text-dark text-buttonText bg-secondary py-3 px-6 rounded-full uppercase font-roboto">
          Explore Articles
        </button>
      </div>
    </section>
  );
};

export default Hero;
