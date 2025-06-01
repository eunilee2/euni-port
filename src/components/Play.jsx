export const Play = () => {
  return (
    <section id="Play" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-primary">Play</h2>
      <p className="mb-6 text-lg text-foreground/80">
        Outside of work, I love to experiment, create, and play with new ideas and mediums. Here are some of my favorite side projects, hobbies, and creative explorations:
      </p>
      <ul className="list-disc pl-6 mb-8 text-foreground/80 space-y-4">
        <li>
          <span className="font-semibold">Generative Art:</span> I use p5.js and Processing to create interactive visuals and generative art pieces. Check out my <a href="https://medium.com/@eunicelee12814" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Medium articles</a> for tutorials and showcases.
        </li>
        <li>
          <span className="font-semibold">Music Discovery:</span> I curate themed playlists on <a href="https://open.spotify.com/user/kiuacxe02ahef2nerwx6rr4mi?si=044823fc9ea74745" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Spotify</a> and explore the intersection of music and technology.
        </li>
        <li>
          <span className="font-semibold">Creative Coding Workshops:</span> I occasionally host workshops and share resources for beginners interested in creative coding and digital art.
        </li>
        <li>
          <span className="font-semibold">Photography & Visual Storytelling:</span> Capturing moments and telling stories through photos and digital collages.
        </li>
        <li>
          <span className="font-semibold">Writing:</span> I write about creativity, technology, and personal growth on <a href="https://medium.com/@eunicelee12814" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Medium</a>.
        </li>
      </ul>
      <p className="text-lg">
        Want to collaborate on a fun project or share ideas?{" "}
        <a
          href="mailto:euniceylee@email.com"
          className="text-primary underline hover:text-primary/80"
        >
          Let’s connect!
        </a>
      </p>
    </section>
  );
};