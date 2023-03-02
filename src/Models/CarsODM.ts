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
}

export default CarsODM;