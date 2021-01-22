import uuid from 'react-uuid'
class Fila {
  constructor({ ingreso = 0, egreso = 0 }) {
    this.uuid = uuid();
    this.ingreso = ingreso
    this.egreso = egreso
  }
}
export default Fila;