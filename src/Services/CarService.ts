import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarService {
  private model: CarsODM;

  constructor() {
    this.model = new CarsODM();
  }

  public createCarDomain(car: ICar): Car {
    const createdCar = new Car(car);
    return createdCar;
  }

  public async createCar(car: ICar): Promise<Car> {
    const createdCar = await this.model.createCar(car);
    const newCar = this.createCarDomain(createdCar);
    return newCar;
  }

  public async getCars(id: string | undefined): Promise<Car[] | null | Car> {
    const cars = await this.model.getCars(id);

    if (!cars) {
      return null;
    }

    if (Array.isArray(cars)) {
      return cars.map((car) => this.createCarDomain(car));
    }
    return this.createCarDomain(cars);
  }

  private async isValidCar(id: string): Promise<boolean> {
    const isValid = await this.model.getCars(id);
    if (isValid) {
      return true;
    }
    return false;
  }

  public async updateCar(id: string, car: ICar): Promise<Car | null> {
    if (await this.isValidCar(id)) {
      const carUpdate = await this.model.updateCar(id, car) as ICar;
      return this.createCarDomain(carUpdate);
    }
    return null;
  }
}

export default CarService;
// teste