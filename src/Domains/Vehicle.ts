import { IVehicle } from '../Interfaces/ICar';

class Vehicle {
  protected id: number | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status || false;
    this.buyValue = vehicle.buyValue;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getId(): number | undefined {
    return this.id;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public getModel(): string {
    return this.model;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public getYear(): number {
    return this.year;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public getColor(): string {
    return this.color;
  }

  public setStatus(status: boolean): void {
    this.status = status;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public setBuyValue(buyValue: number): void {
    this.buyValue = buyValue;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }
}

export default Vehicle;