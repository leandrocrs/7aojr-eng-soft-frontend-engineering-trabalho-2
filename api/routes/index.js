import express from 'express';
import wordsRoutes from './words.js';
import aiWordsRoutes from './ai-words.js';

const routes = express.Router();

routes.use('/words', wordsRoutes);

routes.use('/ai-words', aiWordsRoutes);

export default routes;