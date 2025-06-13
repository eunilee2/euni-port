import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";
import roi_du_pain_video from "../assets/roi_du_pain.mp4";
import { video } from "motion/react-client";

export const Work = () => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current && videoRef.current.pause();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current && videoRef.current.play();
  };

  return (
    <section id="Work" className="max-w-8xl mx-auto px-12">
      {/* <h2 className="text-3xl font-bold mb-8 text-primary">Selected Work</h2> */}
      <div className="grid gap-30 grid-cols-1">
        {/* Project 1: Roi Du Pan */}
        <a
          href="/RDP"
          // target="_blank"
          // rel="noopener noreferrer"
          className="text-primary no-underline"
        >
          <div 
            className="bg-card rounded-lg shadow p-6 flex flex-col w-full min-h-[80vh] justify-end text-left relative overflow-hidden no-underline"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Video */}
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none ${hovered ? "opacity-20" : "opacity-100"}`}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={roi_du_pain_video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Card Content */}
            <div className={`relative z-10 transition-opacity duration-300 no-underline ${hovered ? "opacity-100" : "opacity-0"}`}>
              <h3 className="text-xl font-semibold mb-2 text-primary no-underline">Roi du Pain Bakery Application</h3>
              <p className="mb-2 text-foreground/80 text-primary no-underline">
                Designed and developed a personal portfolio using React and Tailwind CSS to showcase my projects, writing, and creative work.
              </p>
            </div>

          </div>
        </a>

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