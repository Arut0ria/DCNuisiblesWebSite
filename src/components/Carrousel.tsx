import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  "./image4.webp",
  "./image20.webp",
  "./wasp.webp"
];

function Carrousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [currentElement, setCurrentElement] = useState(0);
  const [isTrackOver, setIsTrackOver] = useState(false);

  const delay: number = 3000;
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalIdRef.current)
      clearInterval(intervalIdRef.current);

    if (!isTrackOver)
      intervalIdRef.current = setInterval(nextElement, delay);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isTrackOver]);

  function check() {
    return !(trackRef.current == null || gsap.isTweening(trackRef.current));
  }

  function nextElement() {
    if (!check())
      return;

    setCurrentElement((prev) => (
      gsap.utils.wrap(0, images.length, prev + 1)
    ));
  }

  function prevElement() {
    if (!check())
      return;

    setCurrentElement((prev) => (
      gsap.utils.wrap(0, images.length, prev - 1)
    ));
  }

  useEffect(() => {
    gsap.to(trackRef.current, {
      x: `-${currentElement * 100}%`,
      duration: 0.5,
      ease: "elastic.out(0.5, 0.4)"
    });
  }, [currentElement]);

  return (
    <div onMouseOver={() => setIsTrackOver(true)} onMouseLeave={() => setIsTrackOver(false)} className="
      overflow-hidden
      size-full

      relative
    ">
      <div ref={trackRef} className="
        size-full
        whitespace-nowrap
      ">
        {
          images.map((image, index) => (
            <img key={index} src={image} className="
              size-full
              object-cover object-top
              inline-block

              rounded-lg
            " />
          ))
        }
      </div>

      {/* Controls */}
      <div className="
        absolute inset-0
        flex items-center justify-between
        p-0 sm:p-2
      ">
        <button className="carrousel-button" onClick={prevElement}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button className="carrousel-button" onClick={nextElement}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carrousel;