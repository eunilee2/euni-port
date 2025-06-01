export const Landing = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20"
    >
      <h1 className="text-5xl font-extrabold mb-6 text-primary">
        Eunice Lee
      </h1>
      <h2 className="text-2xl font-semibold mb-4 text-foreground/80">
        Creative Technologist & Designer
      </h2>
      <p className="max-w-xl mb-8 text-lg text-foreground/70">
        I craft thoughtful, engaging digital experiences at the intersection of design and technology. 
        My work blends creativity, code, and curiosity to make the web more beautiful and usable.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#Work"
          className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 transition"
        >
          View My Work
        </a>
        <a
          href="mailto:euniceylee@email.com"
          className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition"
        >
          Contact Me
        </a>
      </div>
      <div className="mt-10 flex flex-wrap gap-6 justify-center text-2xl">
        <a
          href="https://medium.com/@eunicelee12814"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          Medium
        </a>
        <a
          href="https://open.spotify.com/user/kiuacxe02ahef2nerwx6rr4mi?si=044823fc9ea74745"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          Spotify
        </a>
      </div>
    </section>
  );
};