export const routeMap = {
  LOADING: 'AppLoading',
  REQUEST_WORDS: 'GetWords',
  WRITE_WORDS: 'InputWords',
  SHOW_RESULTS: 'Results',
  SHOW_WORDS: 'ShowWords',
  WAIT: 'WaitTime',
}

export const STORAGE_KEY = 'aliceWordsData';

export const API_URL = process.env.EXPO_PUBLIC_API_URL;
export const RANDOM_WORDS_API_PATH = "api/words";
export const AI_WORDS_API_PATH = "api/ai-words/";