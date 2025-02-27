import OpenAI from 'openai';

const openAiClient = new OpenAI({
    apiKey: process.env['OPENAI_KEY'],
});

/**
 * @param {string} topic 
 * @param {number} numberOfWords 
 * @returns 
 */
export const aiWordsByTopicService = async (topic, numberOfWords = 5) => {
    try {
        const prompt = `
        Retorne ${numberOfWords} palavras relacionadas ao tema ${topic}.
        Traga somente as palavras,
        separadas por quebra de linha,
        sem enumera-las ou formata-las ou qualquer caracter extra,
        e somente palavras individuais, nada de palavras compostas ou expressões
        e somente palavras diferentes:
        `

        console.log('prompt', prompt);

        const response = await openAiClient.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt,
            max_tokens: 100,
            n: 1,
        });

        console.log('open AI response', response);

        const words = response.choices[0].text.split('\n')
            .map(word => word.trim())
            .filter(Boolean)
            .filter(word => /^[a-zA-ZÀ-ÿ]+$/.test(word))
            .splice(0, numberOfWords);

        return words;
    } catch (error) {
        console.error('error', error);
        throw new Error("Failed to fetch ai words by topic");
    }
};
