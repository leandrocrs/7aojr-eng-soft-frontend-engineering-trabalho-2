import { LayoutDefault, Button } from '../components/index';
import { randomWordsService } from '../services/randomWordsService'; 
import { asyncStorageService } from '../services/asyncStorageService';
import { addHours } from '../utils/helpers';
import { routeMap } from '../utils/constants';

const handleLoadWords = async (navigation) => {
  try {
    const { data } = await randomWordsService();
    const expires =  addHours(new Date(), 1);
    const newStorage = { data, expires };

    await asyncStorageService.saveData(newStorage);

    navigation.replace(routeMap.SHOW_WORDS, data);
  } catch(error) {
    console.log('Erro ao obter palavras', error);
  }
};

export default function GetWords({ navigation }) {
  return (
    <LayoutDefault>
      <Button title="Carregar palavras" onPress={() => handleLoadWords(navigation)} />
    </LayoutDefault>
  );
}
