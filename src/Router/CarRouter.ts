import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/cars', (req, res) => new CarController(req, res).createCar());
router.get('/cars', (req, res) => new CarController(req, res).getCars());
router.get('/cars/:id', (req, res) => new CarController(req, res).getCars());
router.put('/cars/:id', (req, res) => new CarController(req, res).updateCar());

export default router;