import ICar from '../Interfaces/ICar';

export default class Car implements ICar {
  // id: number;
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
  readonly doorsQty: number;
  readonly seatsQty: number;

  constructor(params: ICar) {
    // this.id = params.id;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.status = params.status;
    this.buyValue = params.buyValue;
    this.doorsQty = params.doorsQty;
    this.seatsQty = params.seatsQty;
  }
}