import React, { Component } from 'react'
import './App.css'
import MiNumero from './MiNumero'
import MiTexto from './MiTexto'
import Contabilidad from './Contabilidad'
import Hook from './hook/MiHook'
import CallApi from './callApi/CallApi'
import CallApiWithHook from './callApi/CallApiWithHook'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      nombre: "",
      view: "numero"
    }
    this.onAdd = this.onAdd.bind(this)
    this.onSub = this.onSub.bind(this)
    this.onTeclar = this.onTeclar.bind(this)
  }
  onTeclar({ target: { value, name } }) {
    this.setState({ [name]: value })
  }
  onSub(e) {
    this.setState({ numero: this.state.numero - 1 })
  }
  onAdd(e) {
    this.setState({ numero: this.state.numero + 1 })
  }
  render() {
    let views = {
      numero: <MiNumero
        numero={this.state.numero}
        onAddM={this.onAdd}
        onSubM={this.onSub}
        onTeclar={this.onTeclar}
      />,
      texto: <MiTexto
        nombre={this.state.nombre}
        onTeclar={this.onTeclar}
      />,
      contabilidad: <Contabilidad />,
      hook: <Hook />,
      callapi: <CallApi />,
      callapi_hook: <CallApiWithHook />
    }
    return <div className="flex">
      <div>
        <div className="flex_column">
          <label htmlFor="input_change">Cambiar valor</label>
          <select name="view" value={this.state.view} onChange={this.onTeclar}>
            <option value="numero">Ver vista Numero</option>
            <option value="texto">Ver vista Texto</option>
            <option value="contabilidad">Ver Contabilidad</option>
            <option value="hook">Ver los hook</option>
            <option value="callapi">Llamar a la api</option>
            <option value="callapi_hook">Llamar a la api con hook</option>
          </select>
        </div>
      </div>
      {
        views[this.state.view]
      }

    </div>
  }
}
export default App;