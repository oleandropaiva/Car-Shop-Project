import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/motorcycles', (req, res) => new MotorcycleController(req, res).createMotorcycle());
router.get('/motorcycles', (req, res) => new MotorcycleController(req, res).getMotorcycles());
router.get('/motorcycles/:id', (req, res) => new MotorcycleController(req, res).getMotorcycles());
router.put('/motorcycles/:id', (req, res) => new MotorcycleController(req, res).updateMotorcycle());

export default router;