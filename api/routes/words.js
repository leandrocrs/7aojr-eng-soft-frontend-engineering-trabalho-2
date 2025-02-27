// GET /api/words

/**
 * TODO
 * acessar uma api que retorna 5 palavras randomicas
 * implementar variáveis de ambiente usando dotenv
 * improvement: criar um service para isso
 */

import express from "express";
import { randomWordsService } from "../services/randomWordsService.js";

const routes = express.Router();

routes.get("/", async (_, res) => {
  try {
    const data = await randomWordsService(5);
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default routes 