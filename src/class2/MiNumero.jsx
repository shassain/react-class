import React from 'react'

const MiNumero = ({ numero, onAddM, onSubM, onTeclar }) => {
  return <React.Fragment>
    <div>
      numero: {numero}
    </div>

    <div>
      <div className="flex_column">
        <button onClick={onAddM}>
          + 1
          </button>
        <button onClick={onSubM}>
          - 1
          </button>
      </div>
    </div>
    <div>
      <div className="flex_column">
        <label htmlFor="input_change">Cambiar valor</label>
        <input
          type="text"
          name="numero"
          value={numero}
          onChange={onTeclar}
        />
      </div>
    </div>
  </React.Fragment>
}
export default MiNumero;
