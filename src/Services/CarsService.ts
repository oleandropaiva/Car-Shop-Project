import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
// import CarsODM from '../Models/CarsODM';

class CarsService {
  // private carsODM = new CarsODM();

  // constructor() {
  //   this.carsODM = new CarsODM();
  // }

  public create(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car.model,
        car.year,
        car.color,
        car.status,
        car.buyValue,
        car.doorsQty,
        car.seatsQty,
      );
    }
    return null;
  }
}

export default CarsService;