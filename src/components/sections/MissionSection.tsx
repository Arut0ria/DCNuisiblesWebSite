import LogoCanvas from "../LogoCanvas";
import { Button } from "../ui/button";

function MissionSection() {
  return (
    <section id="mission" className="
      flex flex-wrap-reverse
      items-center justify-center

      text-white
    ">
      <div className="
        text-justify
        grow-0

        grid grid-cols-1 gap-2
      ">
        <h2 className="
          text-4xl md:text-6xl
          text-center md:text-justify
        ">
          Notre Mission
        </h2>
        <p className="
          text-xl max-w-xl
          text-white/80 leading-tight
          text-center md:text-justify
        ">
          DCNuisibles protège votre maison et votre entreprise des nuisibles.
          Interventions rapides, efficaces et respectueuses des normes sanitaires.
        </p>
        <Button size="lg" variant="outline" className="
          mx-auto md:ml-0
          text-foreground
        ">
          Nous contacter
        </Button>
      </div>

      <div className="h-[20em] md:h-[30em]">
        <LogoCanvas />
      </div>
    </section>);
}

export default MissionSection;