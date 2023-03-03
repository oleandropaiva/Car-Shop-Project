import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';

import ICar from '../Interfaces/ICar';

class CarsODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super(schema, 'Car');
  }

  public async createCar(car: ICar): Promise<ICar> {
    const createdCar = await this.model.create({ ...car });
    
    return createdCar;
  }

  public async getCars(id: string | undefined): Promise<ICar[] | null | ICar> {
    if (id) {
      const car = await this.model.findById(id);
      return car;
    }
    const cars = await this.model.find();
    return cars;
  }

  public async updateCar(id: string, car: ICar): Promise<ICar | null> {
    const carUpdate = await this.model.findByIdAndUpdate(id, { ...car }, { new: true });
    return carUpdate;
  }
}

export default CarsODM;
