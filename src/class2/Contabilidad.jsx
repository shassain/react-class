import React, { Component } from 'react'
import Transaccion from './objetos/Fila'
import Table from './Table'

function Tr({ deleteRow, editRow, transaccion }) {
  return <tr>
    <td><input value={transaccion.ingreso} type="number" onChange={(e) => { editRow("ingreso", e.target.value, transaccion.uuid) }} /></td>
    <td><input value={transaccion.egreso} type="number" onChange={(e) => { editRow("egreso", e.target.value, transaccion.uuid) }} /></td>
    <td><a href="#" onClick={(e) => {
      e.preventDefault()
      deleteRow(transaccion.uuid)
    }}>borrar</a></td>
  </tr>
}
class Contabilidad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      transacciones: []
    }
    this.addRow = this.addRow.bind(this)
    this.deleteRow = this.deleteRow.bind(this)
    this.editRow = this.editRow.bind(this)
    this.CalcularTotal = this.CalcularTotal.bind(this)
  }
  CalcularTotal() {
    const transacciones = this.state.transacciones
    let egreso = transacciones.reduce((total, transaccion) => { return total + transaccion.egreso }, 0)
    let ingreso = transacciones.reduce((total, transaccion) => { return total + transaccion.ingreso }, 0)
    this.setState({
      total: (ingreso - egreso)
    })
  }
  editRow(propiedad, valor, uuid) {
    const transacciones = this.state.transacciones
    let indice = transacciones.findIndex(tra => tra.uuid === uuid)
    let transaccion = transacciones.find(tra => tra.uuid === uuid)
    transaccion[propiedad] = Number(valor)
    transacciones.splice(indice, 1, transaccion)
    this.setState({
      transacciones: transacciones,
    })
    this.CalcularTotal();
  }
  deleteRow(uuid) {
    const transacciones = this.state.transacciones
    let indice = transacciones.findIndex(tra => tra.uuid === uuid)
    transacciones.splice(indice, 1)
    this.setState({
      transacciones: transacciones
    })
    this.CalcularTotal();
  }
  addRow() {
    const trans = new Transaccion({ ingreso: 0, egreso: 0 })
    const transacciones = this.state.transacciones
    transacciones.push(trans)
    this.setState({
      transacciones: transacciones
    })
  }
  componentDidMount() {//se ejecuta cada vez que hacemos una llamada a el componente
    //es ideal para hacer llamadas api

  }
  render() {
    return <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h1>{this.state.total}</h1>
      </div>
      <div>
        <div>
          <button type="button" onClick={this.addRow}>Agregar</button>
        </div>
        <Table>
          {
            this.state.transacciones.map((transaccion) => {
              return <Tr
                key={transaccion.uuid}
                deleteRow={this.deleteRow}
                editRow={this.editRow}
                transaccion={transaccion}
              >
              </Tr>
            })
          }
          <tr>
            <td>
              {
                this.state.transacciones.reduce((total, transaccion) => { return total + transaccion.ingreso }, 0)
              }
            </td>
            <td>
              {
                this.state.transacciones.reduce((total, transaccion) => { return total + transaccion.egreso }, 0)
              }
            </td>
            <td>
              = Totales
              </td>
          </tr>
        </Table>
      </div>
    </div>
  }
}
export default Contabilidad;