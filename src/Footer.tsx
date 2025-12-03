import Socials from "./components/sections/Socials";

export default function Footer() {
  return (<footer className="
    flex justify-between items-center
    bg-card
    p-4 w-full
  ">
    <div className="space-x-2">
      <img src="logo.png" alt="Logo de DC Nuisbles" className="inline-block"></img>
      <h3 className="inline-block align-middle">DC Nuisibles</h3>
    </div>
    <Socials />
  </footer>);
}
