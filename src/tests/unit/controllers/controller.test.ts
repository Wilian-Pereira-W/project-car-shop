import chai from 'chai';
import chaiHttp = require('chai-http');
import CarController from '../../../controllers/Car';

chai.use(chaiHttp);

const { expect } = chai;

const carController = new CarController;

describe('Testando controller do car', () => {

  describe('Testando o rote', () => {
    it('retornar uma rota "/cars"', () => {
      const route = carController.route
      expect(route).to.be.equal('/cars')
    })
  })

});