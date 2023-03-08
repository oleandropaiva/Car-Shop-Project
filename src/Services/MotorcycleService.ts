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

  public async getMotorcycles(id: string | undefined): Promise<Motorcycle[] | null | Motorcycle> {
    const motorcycles = await this.model.getMotorcycles(id);

    if (!motorcycles) {
      return null;
    }

    if (Array.isArray(motorcycles)) {
      return motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    }
    return this.createMotorcycleDomain(motorcycles);
  }

  public async isValidMotorcycle(id: string): Promise<boolean> {
    const isValid = await this.model.getMotorcycles(id);
    if (isValid) {
      return true;
    }
    return false;
  }

  public async updateMotorcycle(id: string, motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    if (await this.isValidMotorcycle(id)) {
      const motorcycleUpdate = await this.model.updateMotorcycle(id, motorcycle) as IMotorcycle;
      return this.createMotorcycleDomain(motorcycleUpdate);
    }
    return null;
  }
}

export default MotorcycleService;