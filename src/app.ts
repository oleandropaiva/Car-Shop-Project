import express from 'express';
import Error from './Middleware/Error';
import carRouter from './Router/CarRouter';
import motorcycleRouter from './Router/MotorcycleRouter';

const app = express();

app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);
app.use(Error.errorMid);

export default app;
