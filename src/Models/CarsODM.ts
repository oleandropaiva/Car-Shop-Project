import {
  Model,
  Schema,
  model,
  models,
  // isValidObjectId,
  // UpdateQuery,
} from 'mongoose';

import ICar from '../Interfaces/ICar';

class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Car || model<ICar>('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    const createdCar = await this.model.create(car);
    return createdCar;
  }
}

export default CarsODM;