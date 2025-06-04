// import { button } from "react";

// test code

export const Landing = () => {

  return (
    <section
      id="landing"
      className="flex flex-col items-left justify-end min-h-[60vh] text-center min-h-screen"
    >
      <div>
        <p className="text-left text-lg sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2.5rem] ml-4 mb-4">designer developer <br /> crafting research-driven interfaces</p>
      </div>
      <div className="flex flex-col text-left ml-4 md:flex-row w-full">
        <h1 className="text-left -ml-0 text-10xl sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] lg:leading-[0.6]">eunıce</h1>
        <h1 className="sm:text-left md:text-right -mr-6 text-10xl sm:text-[8rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] leading-[0.6]">lee</h1>
      </div>
    </section>

  );
};