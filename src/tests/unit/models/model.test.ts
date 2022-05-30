import { expect } from 'chai';
import * as sinon from 'sinon';
import CarModel from '../../../models/Car';

const carModel = new CarModel;
const mockCar = {
  model: 'Uno da Escada',
  year: 1966,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}
describe('Testando o model', () => {
  describe('Testando o método create', () => {
    before(() => {
      sinon.stub(carModel, 'create').resolves(mockCar)
    });

    after(() => {
      sinon.restore()
    })
    it('retorna um objeto', async() => {
      const newCar = await carModel.create(mockCar);
      expect(newCar).to.have.an('object');
    })
    it('Tamanho do objeto', async() => {
      const newCar = await carModel.create(mockCar);
      expect(Object.keys(newCar)).to.have.length(6);
    })
    it('retorna um objeto com a propriedade model', async() => {
      const newCar = await carModel.create(mockCar);
      expect(newCar).to.have.property('model');
    })
    it('retorna um objeto com a propriedade year', async() => {
      const newCar = await carModel.create(mockCar);
      expect(newCar).to.have.property('year');
    })
    it('retorna um objeto com a propriedade color', async() => {
      const newCar = await carModel.create(mockCar);
      expect(newCar).to.have.property('color');
    })
    it('retorna um objeto com a propriedade buyValue', async() => {
      const newCar = await carModel.create(mockCar);
      expect(newCar).to.have.property('buyValue');
    })
    it('retorna um objeto com a propriedade seatsQty', async() => {
      const newCar = await carModel.create(mockCar);
      expect(newCar).to.have.property('seatsQty');
    })
    it('retorna um objeto com a propriedade doorsQty', async() => {
      const newCar = await carModel.create(mockCar);
      expect(newCar).to.have.property('doorsQty');
    })
  })

});