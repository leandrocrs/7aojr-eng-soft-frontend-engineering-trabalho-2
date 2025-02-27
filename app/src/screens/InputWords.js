import { useState } from "react";
import { LayoutDefault, Paragraph, Button, Input } from "../components/index";
import { routeMap } from "../utils/constants";

export default function InputWords({ navigation }) {
  const [palavra01, setPalavra01] = useState("");
  const [palavra02, setPalavra02] = useState("");
  const [palavra03, setPalavra03] = useState("");
  const [palavra04, setPalavra04] = useState("");
  const [palavra05, setPalavra05] = useState("");

  const handleCheckWords = () => {
    const userWords = [palavra01, palavra02, palavra03, palavra04, palavra05];
    navigation.navigate(routeMap.SHOW_RESULTS, userWords);
  };

  return (
    <LayoutDefault>
      <Paragraph text="Informe as palavras memorizadas:" />
      <Input
        placeholder="Palavra 01"
        value={palavra01}
        onChangeText={setPalavra01}

      />
      <Input
        placeholder="Palavra 02"
        value={palavra02}
        onChangeText={setPalavra02}
      />
      <Input
        placeholder="Palavra 03"
        value={palavra03}
        onChangeText={setPalavra03}
      />
      <Input
        placeholder="Palavra 04"
        value={palavra04}
        onChangeText={setPalavra04}
      />
      <Input
        placeholder="Palavra 05"
        value={palavra05}
        onChangeText={setPalavra05}
      />
      <Button title="Conferir palavras" onPress={handleCheckWords} />
    </LayoutDefault>
  );
}
