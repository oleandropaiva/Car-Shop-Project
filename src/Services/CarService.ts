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
}

export default CarService;