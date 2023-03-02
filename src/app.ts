import express from 'express';
import router from './Router/CarRouter';

const app = express();
app.use(router);

export default app;
