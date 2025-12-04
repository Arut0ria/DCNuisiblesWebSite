import { useRef } from "react"
import gsap from "gsap";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import scrollToSection from "./utils/ScrollTo";
import { useGSAP } from "@gsap/react";

function Header() {
  const headerRef = useRef<HTMLHeadElement | null>(null);

  useGSAP(() => {
    if (!headerRef.current) return;

    gsap.fromTo(headerRef.current, {
      y: -300
    }, {
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  }, { scope: headerRef });

  return (<><header ref={headerRef} className="
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
      <li className="shrink-0"><img className="size-10" src="logo.webp" alt="Logo de l'entreprise DC Nuisibles" /></li>
      <li><Button variant="ghost" className="text-base lg:text-xl" onClick={() => scrollToSection("mission")}>Missions</Button></li>
      <li><Button variant="ghost" className="text-base lg:text-xl" onClick={() => scrollToSection("services")}>Services</Button></li>
      <li><Button variant="ghost" className="text-base lg:text-xl" onClick={() => scrollToSection("contact")}>Contact</Button></li>
      <li><ModeToggle /></li>
    </ul>
  </header>
    <h1 className="
      basis-full text-center m-4 lg:m-8
    ">
      DC Nuisibles<br /><span className="text-xl font-medium">
        Votre expert en désinsectisation et dératisation
      </span>
    </h1>
  </>)
}

export default Header