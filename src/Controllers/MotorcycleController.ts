import { Request, Response } from 'express';
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
}

export default MotorcycleController;