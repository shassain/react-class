import React, { useState } from 'react'

const MiHook = () => {
  let [total, setTotal] = useState(0)
  return <div style={{ display: "flex", flexDirection: "column" }}>
    <div>
      <h2>Total:{total}</h2>
    </div>
    <div style={{ display: "flex" }}>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </div>
  </div>
}
export default MiHook