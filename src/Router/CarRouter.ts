import { Router } from 'express';
// import CarsODM from '../Models/CarsODM';
// import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';

const router = Router();
// const carsODM = new CarsODM();
// const carService = new CarService(carsODM);

router.post('/cars', (req, res) => new CarController(req, res).createCar());

export default router;