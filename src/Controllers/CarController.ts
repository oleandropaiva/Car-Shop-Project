import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async getCars() {
    const { id } = this.req.params;
    
    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    
    const cars = await this.service.getCars(id);
    if (!cars) {
      return this.res.status(404).json({ message: 'Car not found' });
    }
    return this.res.status(200).json(cars);
  }
}

export default CarController;