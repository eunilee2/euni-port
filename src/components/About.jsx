import eunice_img from "../assets/eunice_sitting.jpg";

export const About = () => {
  return (
    <section id="About" className=" text-left max-w-8xl h-auto mx-auto px-12 py-12 text-[1.2rem]">
      <div className="flex">
        <div className="w-1/3">
          <img
            src={eunice_img}
            alt="Eunice Lee"
            className="rounded-[5vw] h-2/7 w-4/5 object-cover mt-4"
          />
          {/* <p>Experience</p> */}
        </div>
        <div className="flex-col w-2/3">
          <h2 className="">Hey! Eunice here.</h2>
          <p>I'm a senior at Carnegie Mellon University, studying Information Systems & Human-Computer Interaction.
            <br />I previously worked with IBM, startups, and nonprofits in software development and designer roles.
            <br />I'm open to roles in product, analytics, and design!
          </p>
          {/* <p className="justify-end">
            my dev toolkit
          </p> */}
          <iframe
            className="rounded-xl mt-4 mb-4"
            src="https://open.spotify.com/embed/playlist/2CoOM7q5OqExC0Miz0OqoM?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>
      </div>
    </section>
  );
};