import { useEffect } from "react";

declare global {
  interface Window {
    grecaptcha: any;
  }
};

export default function Recaptcha() {
  const baseUrl = "https://www.google.com/recaptcha/enterprise.js";

  useEffect(() => {
    if (!document.querySelector(`script[src^="${baseUrl}"]`)) {
      const url = new URL(baseUrl);
      url.searchParams.append("render", "6LdRx80rAAAAALytDTcMKOc0K9ZA_GHNNm9leXjg");

      const script = document.createElement("script");
      script.src = url.toString();
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      script.onload = () => {
        console.log("grecaptcha loaded", window.grecaptcha?.enterprise);

        // Exemple usage :
        // window.grecaptcha.enterprise.ready(async () => {
        //   const token = await window.grecaptcha.enterprise.execute(
        //     "6LdRx80rAAAAALytDTcMKOc0K9ZA_GHNNm9leXjg",
        //     { action: "LOGIN" }
        //   );
        //   console.log("Token reçu:", token);
        // });
      };
    }
  }, []);

  return null;
}