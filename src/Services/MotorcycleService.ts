import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private model: MotorcycleODM;

  constructor() {
    this.model = new MotorcycleODM();
  }

  public createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    const createdMotorcycle = new Motorcycle(motorcycle);
    return createdMotorcycle;
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const createdMotorcycle = await this.model.createMotorcycle(motorcycle);
    const newMotorcycle = this.createMotorcycleDomain(createdMotorcycle);
    return newMotorcycle;
  }
}

export default MotorcycleService;