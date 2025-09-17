import { useEffect, useRef } from "react"
import gsap from "gsap";

const gradients = [
  // "bg-orange-400",
  "bg-orange-800",
  "bg-amber-700"
];

export default function BackgroundBalls() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current)
      return;

    const balls = containerRef.current.querySelectorAll(".background-ball");

    balls.forEach((ball) => {
      gsap.set(ball, {
        x: `${gsap.utils.random(0, 100)}lvw`,
        y: `${gsap.utils.random(0, 100)}lvh`
      });

      gsap.to(ball, {
        x: `${gsap.utils.random(0, 100)}lvw`,
        y: `${gsap.utils.random(0, 100)}lvh`,
        yoyo: true,
        repeat: -1,
        duration: gsap.utils.random(10, 12),
        delay: gsap.utils.random(0, 6),
        ease: "sine.inOut"
      });

      gsap.to(ball, {
        scale: 1.2,
        repeat: -1,
        duration: 5,
        delay: gsap.utils.random(0, 5),
        yoyo: true
      });
    });
  });

  return (<div ref={containerRef} className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className={`background-ball
        ${gradients[Math.floor(Math.random() * gradients.length)]}
      `}>
      </div>
    ))}
  </div>)
}