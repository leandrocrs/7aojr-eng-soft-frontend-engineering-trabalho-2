import { useEffect } from "react";
import { BackHandler } from "react-native";
import { LayoutDefault, Paragraph, Button } from "../components/index";
import { useExpiration } from "../hooks/useExpiration";
import { routeMap } from "../utils/constants";

export default function WaitTime({ navigation }) {
  const { timeLeft, loading } = useExpiration();

  const handleExitApp = () => {
    BackHandler.exitApp();
  };

  const handleReset = () => {
    navigation.replace(routeMap.REQUEST_WORDS);
  };

  const getScreenText = (timeLeft) => {
    return `Aguarde ${timeLeft.minutes}m e ${timeLeft.seconds}s para informar as palavras...`;
  };

  // Detecta quando o tempo de espera terminou
  useEffect(() => {
    if (!timeLeft) return;

    const { days, hours, minutes, seconds } = timeLeft;

    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      navigation.replace(routeMap.WRITE_WORDS);
    }
  }, [timeLeft, navigation, loading]);

  if (!loading) {
    return (
      <LayoutDefault>
        <Paragraph
          text={getScreenText(timeLeft)}
          style={{ marginVertical: 30 }}
        />
        <Button
          title="Sair do APP"
          onPress={handleExitApp}
          style={{ marginBottom: 40 }}
        />
        <Button title="Reiniciar" onPress={handleReset} />
      </LayoutDefault>
    );
  }
}
