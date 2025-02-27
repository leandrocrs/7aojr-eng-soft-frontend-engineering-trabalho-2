import { useEffect, useState } from "react";
import { asyncStorageService } from "../services/asyncStorageService";

export function useExpiration() {
  const [timeLeft, setTimeLeft] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function calculateExpiration() {
      try {
        const { expires } = await asyncStorageService.getData();

        if (expires) {
          const expirationDate = new Date(expires);
          const now = new Date();

          if (expirationDate > now) {
            const diffMs = expirationDate.getTime() - now.getTime();
            const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (diffMs % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
          } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          }
        }
      } catch (error) {
        console.error("Erro ao calcular a expiração:", error);
      } finally {
        setLoading(false);
      }
    }

    calculateExpiration();

    // Atualiza a contagem regressiva a cada segundo
    const interval = setInterval(calculateExpiration, 1000);

    return () => clearInterval(interval); // Cleanup do intervalo
  }, []);

  return { timeLeft, loading };
}
