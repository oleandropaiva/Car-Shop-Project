import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

const input = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const output = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: true,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const mock = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
    __v: 0,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: true,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
    __v: 0,
  },
];

describe('Testa a camada CarService', function () {
  const service = new CarService();
  it('Deve retornar um array de carros', async function () {
    sinon.stub(Model, 'find').resolves(mock);
    const result = await service.getCars(undefined);
    expect(result).to.be.an('array');
    expect(result).to.be.deep.equal(output);
  });

  it('Deve retornar um carro por id', async function () {
    sinon.stub(Model, 'findById').resolves(mock[0]);
    const result = await service.getCars(mock[0].id);
    expect(result).to.be.an('object');
    expect(result).to.be.deep.equal(output[0]);
  });

  it('Deve adicionar um carro', async function () {
    sinon.stub(Model, 'create').resolves(mock[0]);
    const result = await service.createCar(input);
    expect(result).to.be.an('object');
    expect(result).to.be.deep.equal(output[0]);
  });
  // afterEach(function () {
  //   sinon.restore();
  // });
});
