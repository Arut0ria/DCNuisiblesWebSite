import { useMemo } from "react";
import { SiFacebook, SiInstagram, SiTiktok, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Button } from "../ui/button";

export default function Socials() {
  const iconClass = useMemo(() => ({
    className: "size-1/2"
  }), []);

  const socials = useMemo(() => ([
    {
      icon: <SiInstagram {...iconClass} />,
      link: "https://www.instagram.com/dcnuisibles/",
    },
    {
      icon: <SiFacebook {...iconClass} />,
      link: "https://www.facebook.com/DavoustDCN/",
    },
    {
      icon: <SiTiktok {...iconClass} />,
      link: "https://www.tiktok.com/@dc.nuisibles.41",
    },
    {
      icon: <SiWhatsapp {...iconClass} />,
      link: "https://wa.me/33689439761"
    }
  ]), []);

  return (<>
    <div className="
        flex items-center justify-center gap-4
    ">
      {socials.map((value, index) => (
        <Button
          key={index}
          variant="outline"
          size="icon"
          className="size-10 lg:size-12 rounded-xl cursor-pointer"
          onClick={() => window.open(value.link, "_blank")}
        >
          {value.icon}
        </Button>
      ))}
    </div>
  </>);
}
