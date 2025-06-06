import eunice_img from "../assets/eunice_sitting.jpg";

// test code

export const Landing = () => {

  return (
    <section
      id="landing"
      className="flex flex-col text-left justify-end min-h-screen text-center"
    >
      <div className="w-1/2"></div>
      <div className="w-1/2 ml-6 mb-4">
        <p className="text-lg sm:text-[2rem] md:text-[2rem] lg:text-[6rem] xl:text-[6rem] leading-none">designer & developer</p>
        <p className="text-lg sm:text-[1rem] md:text-[1rem] lg:text-[2.5rem] xl:text-[2.5rem] pb-6 leading-none">based in nyc<br />crafting research-driven interfaces<br />studying @Carnegie Mellon University</p>
      </div>
      <div className="flex items-end ml-4 w-full">
        <h1 className="-ml-0 text-10xl sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] leading-[0.9]">eunıce</h1>
        <img
          src={eunice_img}
          alt="Eunice Lee"
          className="rounded-[5vw] w-1/5 object-cover mx-6 mb-8"
          style={{ aspectRatio: "5/2" }}
        />
        <h1 className="-mr-6 text-10xl sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] leading-[0.9]">lee</h1>
      </div>
    </section>

  );
};