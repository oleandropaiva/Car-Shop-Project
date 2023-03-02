import { Request, Response } from 'express';
import CarService from '../Services/CarService';

class CarController {
  private service: CarService;
  private req: Request;
  private res: Response;

  constructor(req: Request, res: Response) {
    this.service = new CarService();
    this.req = req;
    this.res = res;
  }

  public async createCar() {
    const createdCar = await this.service.createCar(this.req.body);        
    return this.res.status(201).json(createdCar);
  }
}

export default CarController;