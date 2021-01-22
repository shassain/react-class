import React from 'react'
import MyH2 from './MyH2'
import MyUser from '../usuario/MyUser'
const style = { width: "250px", height: "120px", background: "cyan" };
const MyComponete = ({ usuario }) => {
  return <div style={style}>
    <MyH2 title="class of React" />
    <MyUser usuario={usuario} />
  </div>
}
export default MyComponete;