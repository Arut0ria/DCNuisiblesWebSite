function Header() {
  return (<header className="
    fixed inset-x-0
    flex justify-center
  ">
    <ul className="
      bg-gray-950 shadow-2xl
      rounded-full
      py-2 px-5
      flex gap-4 items-center justify-between

      text-white text-xl
    ">
      <li><img src="logo.png"/></li>
      <li><a href="#presentaton"/>Présentation</li>
      <li><a href="#services"/>Services</li>
      <li><a href="#contact"/>Contact</li>
    </ul>
  </header>)
}

export default Header