import { useEffect, useRef } from "react"
import gsap from "gsap";

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

  return (<header ref={headerRef} className="
    fixed inset-x-0
    flex justify-center flex-wrap
    z-10
  ">
    <ul className="
      bg-gray-950 shadow-2xl
      rounded-full
      py-2 px-5
      flex gap-4 items-center justify-between
      drop-shadow-xl/25

      text-white text-xl
    ">
      <li><img src="logo.png" /></li>
      <li><a href="#mission">Mission</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <h1 className="
      basis-full text-center m-2 lg:m-8
    ">
      DCNuisibles
    </h1>
  </header>)
}

export default Header