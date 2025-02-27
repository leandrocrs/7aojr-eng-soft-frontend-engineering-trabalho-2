import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { asyncStorageService } from '../services/asyncStorageService';
import { routeMap } from '../utils/constants';

export function useRedirect() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUserData() {
      try {
        const parsedData = await asyncStorageService.getData();

        if (!parsedData) {
          navigation.replace(routeMap.REQUEST_WORDS); 
          return;
        }

        const storedDate = new Date(parsedData.expires);
        const currentDate = new Date();

        if (storedDate < currentDate) {
          navigation.replace(routeMap.WRITE_WORDS);
        } else {
          navigation.replace(routeMap.WAIT);
        }
      } catch (error) {
        console.error('Erro ao verificar os dados:', error);
      } finally {
        setLoading(false);
      }
    }

    checkUserData();
  }, [navigation]);

  return loading;
}
