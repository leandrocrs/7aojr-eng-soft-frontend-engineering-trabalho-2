import express from 'express';
import wordsRoutes from './words.js';

const routes = express.Router();

routes.use('/words', wordsRoutes);

export default routes;