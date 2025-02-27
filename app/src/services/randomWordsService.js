import { API_URL, RANDOM_WORDS_API_PATH } from '../utils/constants';

export const randomWordsService = async () => {
  try {
    // improvement: trocar para Axios e criar um client
    const response = await fetch(
      `${API_URL}${RANDOM_WORDS_API_PATH}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch random words");
  }
};
