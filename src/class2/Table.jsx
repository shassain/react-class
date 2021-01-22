import React from 'react'

const Table = ({ children }) => {
  return <table>
    <thead>
      <tr>
        <td>Ingresos</td>
        <td>Egresos</td>
        <td>opcion</td>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
}
export default Table;