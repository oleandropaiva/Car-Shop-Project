import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';

import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  [x: string]: unknown;
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    
    super(schema, 'Motorcycle');
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    const createdMotorcycle = await this.model.create({ ...motorcycle });
    
    return createdMotorcycle;
  }

  public async getMotorcycles(id: string | undefined): Promise<IMotorcycle[] | null | IMotorcycle> {
    if (id) {
      const motorcycle = await this.model.findById(id);
      return motorcycle;
    }
    const motorcycles = await this.model.find();
    return motorcycles;
  }
}

export default MotorcycleODM;
