import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config.js';
import { db } from './database/database.js';
import simRouter from './router/simulation.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());

app.use('/simulation', simRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.sendStatus(500);
});

db.getConnection();

const server = app.listen(config.host.port, () => {
    console.log('server is on..');
});
