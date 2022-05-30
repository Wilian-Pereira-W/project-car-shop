import { expect } from 'chai';
import * as sinon from 'sinon';
import CarService from '../../../services/Car';

const carServices = new CarService;
const mockCar = {
  model: 'Uno da Escada',
  year: 1966,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
}

const mockCars = [
	{
		"_id": "6294f6c32f25fe4e692d718a",
		"model": "Uno da Escada",
		"year": 1966,
		"color": "blue",
		"buyValue": 3500,
		"doorsQty": 2,
		"seatsQty": 2
	},
	{
		"_id": "6294f6e02f25fe4e692d718d",
		"model": "Corsa",
		"year": 1966,
		"color": "blue",
		"buyValue": 3500,
		"doorsQty": 2,
		"seatsQty": 2
	}
]
describe('Testando o services', () => {
  describe('Testando o método create', () => {
    before(() => {
      sinon.stub(carServices, 'create').resolves(mockCar)
    });

    after(() => {
      sinon.restore()
    })
    it('retorna um objeto', async() => {
      const newCar = await carServices.create(mockCar);
      expect(newCar).to.have.an('object');
    })
    it('retorna um objeto com a propriedade model', async() => {
      const newCar = await carServices.create(mockCar);
      expect(newCar).to.have.property('model');
    })
    it('retorna um objeto com a propriedade year', async() => {
      const newCar = await carServices.create(mockCar);
      expect(newCar).to.have.property('year');
    })
    it('retorna um objeto com a propriedade color', async() => {
      const newCar = await carServices.create(mockCar);
      expect(newCar).to.have.property('color');
    })
    it('retorna um objeto com a propriedade buyValue', async() => {
      const newCar = await carServices.create(mockCar);
      expect(newCar).to.have.property('buyValue');
    })
    it('retorna um objeto com a propriedade seatsQty', async() => {
      const newCar = await carServices.create(mockCar);
      expect(newCar).to.have.property('seatsQty');
    })
    it('retorna um objeto com a propriedade doorsQty', async() => {
      const newCar = await carServices.create(mockCar);
      expect(newCar).to.have.property('doorsQty');
    })
  })

  describe('Testando o método read', () => {
    before(() => {
      sinon.stub(carServices, 'read').resolves(mockCars)
    });

    after(() => {
      sinon.restore()
    })
    it('retorna a quantidade de "2" carros', async() => {
      const cars = await carServices.read();
      expect(cars).to.have.length(2);
    })
    it('retorna um array', async() => {
      const cars = await carServices.read();
      expect(cars).to.have.an('array');
    })
  })

  describe('Testando o método readOne', () => {
    before(() => {
      sinon.stub(carServices, 'readOne').resolves(mockCar)
    });

    after(() => {
      sinon.restore()
    })
    it('retorna um object', async() => {
      const car = await carServices.readOne("6294f6c32f25fe4e692d718a");
      expect(car).to.have.an('object');
    })
    it('retorna um objeto com a propriedade model', async() => {
      const car = await carServices.readOne("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('model');
    })
    it('retorna um objeto com a propriedade year', async() => {
      const car = await carServices.readOne("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('year');
    })
    it('retorna um objeto com a propriedade color', async() => {
      const car = await carServices.readOne("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('color');
    })
    it('retorna um objeto com a propriedade buyValue', async() => {
      const car = await carServices.readOne("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('buyValue');
    })
    it('retorna um objeto com a propriedade seatsQty', async() => {
      const car = await carServices.readOne("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('seatsQty');
    })
    it('retorna um objeto com a propriedade doorsQty', async() => {
      const car = await carServices.readOne("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('doorsQty');
    })
  })

  describe('Testando o método update', () => {
    const updateMockCar = {
      ...mockCar,
      model: 'Ferrari'
    }
    before(() => {
      sinon.stub(carServices, 'update').resolves(updateMockCar)
    });

    after(() => {
      sinon.restore()
    })
    it('retorna um object', async() => {
      const car = await carServices.update("6294f6c32f25fe4e692d718a", updateMockCar);
      expect(car).to.have.an('object');
    })
    it('retorna um objeto com a propriedade model', async() => {
      const car = await carServices.update("6294f6c32f25fe4e692d718a", updateMockCar);
      expect(car).to.have.property('model');
    })
    it('retorna um objeto com a propriedade year', async() => {
      const car = await carServices.update("6294f6c32f25fe4e692d718a", updateMockCar);
      expect(car).to.have.property('year');
    })
    it('retorna um objeto com a propriedade color', async() => {
      const car = await carServices.update("6294f6c32f25fe4e692d718a", updateMockCar);
      expect(car).to.have.property('color');
    })
    it('retorna um objeto com a propriedade buyValue', async() => {
      const car = await carServices.update("6294f6c32f25fe4e692d718a", updateMockCar);
      expect(car).to.have.property('buyValue');
    })
    it('retorna um objeto com a propriedade seatsQty', async() => {
      const car = await carServices.update("6294f6c32f25fe4e692d718a", updateMockCar);
      expect(car).to.have.property('seatsQty');
    })
    it('retorna um objeto com a propriedade doorsQty', async() => {
      const car = await carServices.update("6294f6c32f25fe4e692d718a", updateMockCar);
      expect(car).to.have.property('doorsQty');
    })
  })

  describe('Testando o método delete', () => {
    before(() => {
      sinon.stub(carServices, 'delete').resolves(mockCar)
    });

    after(() => {
      sinon.restore()
    })
    it('retorna um object', async() => {
      const car = await carServices.delete("6294f6c32f25fe4e692d718a");
      expect(car).to.have.an('object');
    })
    it('retorna um objeto com a propriedade model', async() => {
      const car = await carServices.delete("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('model');
    })
    it('retorna um objeto com a propriedade year', async() => {
      const car = await carServices.delete("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('year');
    })
    it('retorna um objeto com a propriedade color', async() => {
      const car = await carServices.delete("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('color');
    })
    it('retorna um objeto com a propriedade buyValue', async() => {
      const car = await carServices.delete("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('buyValue');
    })
    it('retorna um objeto com a propriedade seatsQty', async() => {
      const car = await carServices.delete("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('seatsQty');
    })
    it('retorna um objeto com a propriedade doorsQty', async() => {
      const car = await carServices.delete("6294f6c32f25fe4e692d718a");
      expect(car).to.have.property('doorsQty');
    })
  })

});