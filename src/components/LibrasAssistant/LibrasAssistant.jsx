import { useEffect } from "react";

export default function LibrasAssistant() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    document.head.appendChild(script);

    window.addEventListener("load", () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    });

    return () => {
      if (window.VLibras) {
        const vlibrasElement = document.querySelector("div[vw-access-button]");
        if (vlibrasElement) {
          vlibrasElement.remove();
        }
      }
    };
  }, []);

  return null;
}
