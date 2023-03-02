interface ICar {
  id?: number,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number
}

interface IVehicle {
  id?: number,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
}

export default ICar;
export { IVehicle };