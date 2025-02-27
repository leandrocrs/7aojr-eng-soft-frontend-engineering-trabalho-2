// GET /api/words

/**
 * TODO
 * acessar uma api que retorna 5 palavras randomicas
 * implementar variáveis de ambiente usando dotenv
 * improvement: criar um service para isso
 */

import express from "express";
import { aiWordsByTopicService } from "../services/aiWordsByTopicService.js";

const routes = express.Router();

routes.get("/:topic", async (req, res) => {
  try {
    const { topic } = req.params;
    const { numberOfWords } = req.query;

    console.log(`topic: ${topic} numberOfWords: ${numberOfWords}`);

    if (!topic) {
      throw new Error("topic is required");
    }

    const data = await aiWordsByTopicService(topic, numberOfWords);

    console.log('data from ai service: ', data);

    res.json({ data });
  } catch (error) {
    console.error('error', error);
    
    res.status(500).json({ message: error.message });
  }
});

export default routes 