import { Bird, Bug, Rat, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useMemo } from "react";


export default function ServicesSection() {
  const services = useMemo(() => ([
    {
      icon: <Rat />,
      title: "Dératisation",
      items: ["Élimination rats & souris", "Prévention rongeurs"],
    },
    {
      icon: <Bug />,
      title: "Désinsectisation",
      items: ["Cafards/Blattes & fourmis", "Punaises de lit", "Guêpes & frelons"],
    },
    {
      icon: <Bird />,
      title: "Dépigeonnage",
      items: ["Prévention pigeons", "Protection bâtiments"],
    },
    {
      icon: <Zap />,
      title: "Taupes & Campagnols",
      items: ["Élimination taupes et campagnols", "Protection jardins et pelouses"],
    },
  ]), []);

  return (<section id="services" className="
    grid grid-cols-1 gap-4
  ">
    <h2 className="
      basis-full
      text-center md:text-justify
      text-4xl md:text-6xl
      text-white
      ">
      Nos Services
    </h2>
    <p className="
      text-center md:text-justify
      text-xl md:max-w-3/4
      text-white/80 leading-tight
      mx-auto md:m-0
    ">
      Chez <strong>DC Nuisibles</strong>, nous intervenons rapidement pour éliminer et prévenir les nuisibles :
      dératisation, désinsectisation (cafards, punaises, guêpes, frelons, fourmis, etc.),
      désinfection après infestation et solutions préventives durables.
      Intervention <strong>7j/7</strong>, efficace et discrète.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="hover:scale-105 transition-transform">
          <CardHeader>
            <CardTitle>
              <div className="flex gap-2 items-center flex-nowrap">
                {service.icon}
                {service.title}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent-foreground rounded-full inline-block"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>)
}