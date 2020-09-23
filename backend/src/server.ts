import'reflect-metadata';

import express from 'express';
const app = express();
import routes from './routes';
import './database';

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('🔥 Server running at localhost:3333'));