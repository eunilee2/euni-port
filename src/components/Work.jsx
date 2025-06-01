export const Work = () => {
  return (
    <section id="Work" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-primary">Selected Work</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {/* Project 1 */}
        <div className="bg-card rounded-lg shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="mb-2 text-foreground/80">
            Designed and developed a personal portfolio using React and Tailwind CSS to showcase my projects, writing, and creative work.
          </p>
          <a
            href="https://github.com/euniceylee/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
          >
            View on GitHub
          </a>
        </div>
        {/* Project 2 */}
        <div className="bg-card rounded-lg shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">UI/UX for Wellness App</h3>
          <p className="mb-2 text-foreground/80">
            Led the UI/UX design for a mobile wellness app, focusing on accessibility and user engagement. Collaborated with developers to bring the vision to life.
          </p>
          <a
            href="https://www.figma.com/file/yourfigmaproject"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
          >
            View Case Study
          </a>
        </div>
        {/* Project 3 */}
        <div className="bg-card rounded-lg shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Creative Coding Experiments</h3>
          <p className="mb-2 text-foreground/80">
            Explored generative art and interactive visuals using p5.js and Three.js. Shared learnings and code on Medium and GitHub.
          </p>
          <a
            href="https://medium.com/@eunicelee12814"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
          >
            Read Articles
          </a>
        </div>
        {/* Project 4 */}
        <div className="bg-card rounded-lg shadow p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Spotify Playlist Curator</h3>
          <p className="mb-2 text-foreground/80">
            Curated and shared themed playlists, blending music discovery with visual storytelling. Integrated Spotify API for dynamic playlist features.
          </p>
          <a
            href="https://open.spotify.com/user/kiuacxe02ahef2nerwx6rr4mi?si=044823fc9ea74745"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary/80"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
      <p className="mt-12 text-lg text-center text-foreground/70">
        Interested in collaborating or learning more?{" "}
        <a
          href="mailto:euniceylee@email.com"
          className="text-primary underline hover:text-primary/80"
        >
          Get in touch!
        </a>
      </p>
    </section>
  );
};