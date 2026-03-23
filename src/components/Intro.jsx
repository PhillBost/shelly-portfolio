import { useEffect, useRef } from "react";
import introimage from "/images/landing-img.jpg";

const Intro = () => {
  const textRef = useRef(null);
  const scrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      if (textRef.current) {
        textRef.current.style.transform =
          `translateY(${scrollY.current * 0.2}px)`;
      }
      ticking.current = false;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full pt-5 relative">
      <div
        className="relative w-full overflow-auto h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${introimage})` }}
      >
        <div
          ref={textRef}
          className="absolute w-full text-center top-[40%] z-10 text-8xl will-change-transform"
        >
          <h1 className="font-dancing">
            Shelly Bernwanger
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
