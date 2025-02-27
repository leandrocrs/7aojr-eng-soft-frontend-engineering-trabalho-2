import 'dotenv/config.js'

import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

// parse de JSON para objetos JavaScript
app.use(express.json());

// requisições de outro domínio são permitidas
app.use(cors());

// Logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api', routes);


app.get('/', (_, res) => {
    res.json({ message: 'Hello World!!' });
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default server;