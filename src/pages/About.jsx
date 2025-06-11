import React, { useEffect, useRef } from "react";
import AboutContent from "../components/Content/AboutContent";
import GithubCommit from "../components/ui/GithubCommit";
import sticker2 from "../../public/Nft Coding GIF.gif";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
// Import Locomotive Scroll
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


const About = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Locomotive Scroll initialization
    let scroll;
    if (containerRef.current) {
      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.08,
        multiplier: 1,
      });
    }
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="min-h-screen w-full flex flex-col px-4 sm:px-6 md:px-14 pt-16 gap-10"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-10 mx-auto">
        {/* Image Section */}
        <div
          ref={imgRef}
          className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto"
        >
          <img
            loading="lazy"
            className="w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-80 lg:h-60 rounded-xl object-cover z-1"
            src={sticker2}
            alt="sticker"
          />
        </div>

        {/* Text Section */}
        <div
          ref={textRef}
          className="w-full md:w-auto flex justify-center md:justify-start"
        >
          <p className="orbitron-custom max-w-xl text-base sm:text-lg md:text-xl flex flex-col gap-3 text-center md:text-left">
            <span className="inline-block tracking-wider text-purple-500">
              <Typewriter
                options={{
                  strings: [
                    "Hi, I’m Keshav Gilhotra —18-year-old",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 50,
                }}
              />
            </span>
            <span className="inline-block">
              MERN Stack Developer passionate about creating intuitive and visually engaging digital experiences that blend design with seamless functionality.
              <span className="inline-block">
                I enjoy working with technologies like React.js, Node.js, and Figma,
                turning ideas into smooth, functional, and modern web applications.
              </span>
            </span>
          </p>
        </div>
      </div>

      <div className="w-full mt-8">
        <GithubCommit />
      </div>

      <div>
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
