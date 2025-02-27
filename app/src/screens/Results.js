import { LayoutDefault, Paragraph, Button, Card } from '../components/index';
import { routeMap } from '../utils/constants';
import { useResults } from '../hooks/useResults';
import { asyncStorageService } from '../services/asyncStorageService';

export default function Results({ navigation, route }) {
  const userWords = route.params || {};
  const { result, loading } = useResults(userWords);

  const handleNewGame = async () => {
    try {
      await asyncStorageService.removeData();
      navigation.navigate(routeMap.LOADING);
    } catch (error) {
      console.log('Erro ao iniciar novo jogo', error);
    }
  };

  if (loading) {
    return (
      <LayoutDefault>
        <Paragraph text="Carregando resultados..." />
      </LayoutDefault>
    );
  }

  return (
    <LayoutDefault>
      <Paragraph text="Resultado:" />
      {result.map((item, key) => (
        <Card title={item.title} key={key} status={item.status ? 'success' : 'error'} />
      ))}
      <Button title="Jogar novamente!" onPress={handleNewGame} />
    </LayoutDefault>
  );
}