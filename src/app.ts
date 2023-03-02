import express from 'express';
import Error from './Middleware/Error';
import router from './Router/CarRouter';

const app = express();

app.use(express.json());
app.use(Error.errorMid);
app.use(router);

export default app;
