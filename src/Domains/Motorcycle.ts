import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: string;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.engineCapacity = motorcycle.engineCapacity;
    this.category = motorcycle.category;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public getCategory(): string {
    return this.category;
  }
}

export default Motorcycle;