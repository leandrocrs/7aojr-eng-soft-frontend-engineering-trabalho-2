import { API_URL, RANDOM_WORDS_API_PATH } from '../utils/constants';

const randomWordsService = async () => {
  try {
    // improvement: trocar para Axios e criar um client
    console.debug(`Fetching random words from ${API_URL}${RANDOM_WORDS_API_PATH}`);
    const response = await fetch(
      `${API_URL}${RANDOM_WORDS_API_PATH}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch random words");
  }
};

module.exports = { randomWordsService };