import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col px-5 md:py-16 py-8 md:text-left text-center">
      <div className="flex flex-col md:items-start items-center mb-10 md:mb-0 justify-center gap-5">
        <h1 className="font-poppins font-semibold mb-5 mt-12 md:mt-0 sm:text-[62px] text-[42px] text-white md:leading-[100px] leading-[55px]">
          Supply, Trade and Earn ‍Crypto Blue Chips
        </h1>
        <Button label={"LAUNCH APP"} />
      </div>
      <div className="relative">
        <img
          src="/banner.png"
          alt="banner"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] top-0 bottom-40 rounded-full white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 rounded-full blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
