import React from "react";

export const Utils = {
  IsMobile(): boolean {
    const [isMobile, setIsMobile] = React.useState<boolean>(false);

    React.useEffect(() => {
      const handleResize = (event: MediaQueryListEvent) => {
        setIsMobile(event.matches);
      };

      const mediaQuery = window.matchMedia("(max-width: 768px)"); // Establece la consulta de medios para dispositivos móviles

      setIsMobile(mediaQuery.matches); // Establece el estado inicial

      mediaQuery.addEventListener("change", handleResize); // Agrega el listener para detectar cambios en el estado de la consulta de medios

      return () => {
        mediaQuery.removeEventListener("change", handleResize); // Elimina el listener al desmontar el componente
      };
    }, []);
    return isMobile;

  },
  getEndpoint (url: string) {
    const endpoint = url?.split('/').filter(Boolean).pop();
    return Promise.resolve(endpoint);
    
  },
} 