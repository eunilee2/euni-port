export const About = () => {
  return (
    <section id="About" className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4 text-primary">About</h2>
      <p className="mb-4 text-lg text-foreground/80">
        Hi! I’m Eunice Lee, a creative technologist and designer passionate about building thoughtful, impactful digital experiences. With a background in both design and development, I love bridging the gap between beautiful visuals and seamless functionality.
      </p>
      <p className="mb-4 text-lg text-foreground/80">
        My journey has taken me through UI/UX design, front-end development, and creative coding. I enjoy collaborating with others, learning new tools, and exploring how technology can be used for positive change.
      </p>
      <p className="mb-4 text-lg text-foreground/80">
        When I’m not coding or designing, you’ll find me writing on Medium, curating playlists on Spotify, or experimenting with new art forms. I’m always open to new opportunities and collaborations!
      </p>
      <ul className="list-disc pl-6 mb-4 text-foreground/80">
        <li>🎨 UI/UX Design & Prototyping</li>
        <li>💻 Front-end Development (React, JavaScript, CSS)</li>
        <li>📝 Writing & Content Creation</li>
        <li>🎵 Music & Digital Art</li>
      </ul>
      <p className="text-lg">
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