// import { expect } from 'chai';
// import sinon from 'sinon';
// import { Model } from 'mongoose';
// import MotorcycleService from '../../../src/Services/MotorcycleService';

// const honda = 'Honda Cb 600f Hornet';
// const input = {
//   model: honda,
//   year: 2005,
//   color: 'Yellow',
//   status: true,
//   buyValue: 30.000,
//   category: 'Street',
//   engineCapacity: 600,
// };

// const output = [
//   {
//     id: '634852326b35b59438fbea2f',
//     model: honda,
//     year: 2005,
//     color: 'Yellow',
//     status: true,
//     buyValue: 30.000,
//     category: 'Street',
//     engineCapacity: 600,
//   },
//   {
//     id: '634852326b35b59438fbea31',
//     model: 'Honda Cbr 1000rr',
//     year: 2011,
//     color: 'Orange',
//     status: true,
//     buyValue: 59.900,
//     category: 'Street',
//     engineCapacity: 1000,
//   },
// ];

// const mock = [
//   {
//     id: '634852326b35b59438fbea2f',
//     model: honda,
//     year: 2005,
//     color: 'Yellow',
//     status: true,
//     buyValue: 30.000,
//     category: 'Street',
//     engineCapacity: 600,
//   },
//   {
//     id: '634852326b35b59438fbea31',
//     model: 'Honda Cbr 1000rr',
//     year: 2011,
//     color: 'Orange',
//     status: true,
//     buyValue: 59.900,
//     category: 'Street',
//     engineCapacity: 1000,
//   },
// ];

// describe('Testa a camada MotorcycleService', function () {
//   const service = new MotorcycleService();
//   it('Deve retornar um array de carros', async function () {
//     sinon.stub(Model, 'find').resolves(mock);
//     const result = await service.getMotorcycles(undefined);
//     expect(result).to.be.an('array');
//     expect(result).to.be.deep.equal(output);
//   });

//   it('Deve retornar uma moto por id', async function () {
//     sinon.stub(Model, 'findById').resolves(mock[0]);
//     const result = await service.getMotorcycles(mock[0].id);
//     expect(result).to.be.an('object');
//     expect(result).to.be.deep.equal(output[0]);
//   });

//   it('Verifica se retorna null quando não encontra a moto', async function () {
//     sinon.stub(Model, 'findById').resolves(null);
//     const result = await service.getMotorcycles('634852326b35b59438fbea2fcvcvc');
//     expect(result).to.be.deep.equal(null);
//   });

//   it('Deve criar uma moto', async function () {
//     sinon.stub(Model, 'create').resolves(mock[0]);
//     const result = await service.createMotorcycle(input);
//     expect(result).to.be.an('object');
//     expect(result).to.be.deep.equal(output[0]);
//   });

//   it('Deve atualizar uma moto', async function () {
//     sinon.stub(Model, 'findByIdAndUpdate').resolves(mock[0]);
//     const result = await service.updateMotorcycle(mock[0].id, input);
//     expect(result).to.be.an('object');
//     expect(result).to.be.deep.equal(output[0]);
//   });
// });