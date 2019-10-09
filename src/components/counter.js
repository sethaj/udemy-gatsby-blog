import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h3>click the button</h3>
      <h3>likes {count}</h3>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default Counter
