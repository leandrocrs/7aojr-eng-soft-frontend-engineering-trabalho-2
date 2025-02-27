import { AI_WORDS_API_PATH, API_URL } from "../utils/constants";

export const aiWordsService = {
    /**
     * @param {string} topic 
     * @returns {Promise<{data:string[]}>}
     */
    async getAiWords(topic) {
        try {
            const response = await fetch(
                `${API_URL}${AI_WORDS_API_PATH}${topic}?numberOfWords=5`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Failed to fetch random words");
        }
    }
}