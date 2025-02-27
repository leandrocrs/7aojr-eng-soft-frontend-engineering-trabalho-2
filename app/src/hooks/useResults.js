import { useState, useEffect } from 'react';
import { asyncStorageService } from '../services/asyncStorageService';

export const useResults = (userWords) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWords = async () => {
      try {
        const { data: storageWords } = await asyncStorageService.getData();
        const resultSummary = [];

        console.log(userWords, storageWords);

        for (let i = 0; i < storageWords.length; i++) {
          resultSummary.push(compareWords(userWords[i], storageWords[i]));
        }

        setResult(resultSummary);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      } finally {
        setLoading(false);
      }
    };

    getWords();
  }, [userWords]);

  const compareWords = (userWord, storageWord) => {
    if (userWord.trim().toLowerCase() === storageWord.trim().toLowerCase()) {
      return { title: userWord, status: true };
    } else {
      return { title: `${userWord} / ${storageWord}`, status: false };
    }
  };

  return { result, loading };
};