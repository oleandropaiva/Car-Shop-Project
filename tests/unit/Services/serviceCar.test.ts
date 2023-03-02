import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

// const input = {
//   model: 'Marea',
//   year: 2002,
//   color: 'Black',
//   status: true,
//   buyValue: 15.990,
//   doorsQty: 4,
//   seatsQty: 5,
// };

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
  it('Deve retornar um array de carros', async function () {
    sinon.stub(Model, 'find').resolves(mock);
    const service = new CarService();
    const result = await service.getCars(undefined);
    expect(result).to.be.an('array');
    expect(result).to.be.deep.equal(output);
  });
  
  // afterEach(function () {
  //   sinon.restore();
  // });
});
