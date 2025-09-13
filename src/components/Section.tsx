import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

function Section({ children, ...props }: SectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current)
      return;

    gsap.fromTo(sectionRef.current, {
      x: "-200%"
    }, {
      x: 0,
      delay: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 35%",
        // end: "bottom 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (<section ref={sectionRef} className="
    h-lvh w-full flex
    items-center
  " {...props}>
    <div className="
      flex justify-center items-center
      flex-wrap-reverse md:flex-nowrap
      size-full
    ">
      {children}
    </div>
  </section>);
}

export default Section;