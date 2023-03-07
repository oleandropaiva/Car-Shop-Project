import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private service: MotorcycleService;
  private req: Request;
  private res: Response;

  constructor(req: Request, res: Response) {
    this.service = new MotorcycleService();
    this.req = req;
    this.res = res;
  }

  public async createMotorcycle() {
    const createdMotorcycle = await this.service.createMotorcycle(this.req.body);
    return this.res.status(201).json(createdMotorcycle);
  }

  public async getMotorcycles() {
    const { id } = this.req.params;
    
    if (id && !isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    
    const motorcycles = await this.service.getMotorcycles(id);
    if (!motorcycles) {
      return this.res.status(404).json({ message: 'Motorcycle not found' });
    }
    return this.res.status(200).json(motorcycles);
  }
}

export default MotorcycleController;