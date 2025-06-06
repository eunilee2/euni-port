export const Work = () => {
  return (
    <section id="Work" className="max-w-8xl mx-auto px-12">
      {/* <h2 className="text-3xl font-bold mb-8 text-primary">Selected Work</h2> */}
      <div className="grid gap-30 grid-cols-1">
        {/* Project 1 */}
        <div className="bg-card rounded-lg shadow p-6 flex flex-col w-full min-h-[80vh] justify-center">
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
        <div className="bg-card rounded-lg shadow p-6 flex flex-col w-full min-h-[80vh] justify-center">
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
        <div className="bg-card rounded-lg shadow p-6 flex flex-col w-full min-h-[80vh] justify-center">
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

      </div>

    </section>
  );
};