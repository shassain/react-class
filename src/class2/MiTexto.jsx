import React from 'react'

const MiTexto = ({ nombre, onTeclar }) => {
  return <React.Fragment>
    <div>
      el nombre:{nombre}
    </div>
    <div>
      <div className="flex_column">
        <label htmlFor="input_change">Cambiar valor de nombre</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={onTeclar}
        />
      </div>
    </div>
  </React.Fragment>
}
export default MiTexto