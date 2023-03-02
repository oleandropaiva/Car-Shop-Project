import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public setDoorsQty(doorsQty: number): void {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty(): number {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number): void {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty(): number {
    return this.seatsQty;
  }
}

export default Car;