import { useState } from 'react';
import { useToast } from 'react-native-toast-notifications';
import { Button, Input, LayoutDefault, Paragraph } from '../components/index';
import { asyncStorageService } from '../services/asyncStorageService';
import { randomWordsService } from '../services/randomWordsService';
import { routeMap } from '../utils/constants';
import { addHours } from '../utils/helpers';
import { aiWordsService } from 'src/services/aiWordsService';
const saveWordsAndGoToNextScreen = async (data, navigation) => {
  const expires = addHours(new Date(), 1);
  const newStorage = { data, expires };

  await asyncStorageService.saveData(newStorage);

  navigation.replace(routeMap.SHOW_WORDS, data);
}

export default function GetWords({ navigation }) {
  const [topic, setTopic] = useState('');
  const toast = useToast()

  const handleLoadWords = async () => {
    try {
      const { data } = await randomWordsService();

      await saveWordsAndGoToNextScreen(data, navigation);
    } catch (error) {
      toast.show('Erro ao obter palavras aleatórias', { type: 'danger' });
      console.error(error);
    }
  };

  const handleLoadWordsByTopic = async () => {
    try {
      const trimmedTopic = topic.trim();

      if (trimmedTopic.length === 0) {
        throw new Error('Tema não informado');
      }

      const { data } = await aiWordsService.getAiWords(trimmedTopic);

      await saveWordsAndGoToNextScreen(data, navigation);
    } catch (error) {
      toast.show(error.message, { type: 'danger' });
    }
  };

  return (
    <LayoutDefault>
      <Button title="Carregar palavras aleatórias" onPress={() => handleLoadWords()} />
      <Paragraph text="ou" align='center' style={{ marginTop: 16 }} />
      <Input placeholder="Tema" onChangeText={setTopic} value={topic} spellCheck={true} />
      <Button title="Carregar palavras pelo tema acima" onPress={() => handleLoadWordsByTopic()} style={{ marginBottom: 16 }} />
    </LayoutDefault>
  );
}
