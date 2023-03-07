import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/motorcycles', (req, res) => new MotorcycleController(req, res).createMotorcycle());

export default router;