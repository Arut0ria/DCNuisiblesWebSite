import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";

function Header() {
  const headerRef = useRef<HTMLHeadElement | null>(null);

  useEffect(() => {
    if (!headerRef.current)
      return;

    gsap.fromTo(headerRef.current, {
      y: -300
    }, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  }, []);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (<header ref={headerRef} className="
    sticky w-full top-2
    flex justify-center flex-wrap
    z-10
  ">
    <ul className="
      bg-background shadow-2xl
      rounded-full
      py-2 px-5
      flex gap-1 lg:gap-4 items-center justify-between
      shrink-0

      shadow-accent
      text-foreground
    ">
      <li className="shrink-0"><img src="logo.png" alt="Logo de l'entreprise DC Nuisibles" /></li>
      <li><Button variant="ghost" className="text-base lg:text-xl" onClick={() => scrollToSection("mission")}>Missions</Button></li>
      <li><Button variant="ghost" className="text-base lg:text-xl" onClick={() => scrollToSection("services")}>Services</Button></li>
      <li><Button variant="ghost" className="text-base lg:text-xl" onClick={() => scrollToSection("contact")}>Contact</Button></li>
      <li><ModeToggle /></li>
    </ul>
    <h1 className="
      basis-full text-center m-4 lg:m-8
    ">
      DC Nuisibles
    </h1>
  </header>)
}

export default Header