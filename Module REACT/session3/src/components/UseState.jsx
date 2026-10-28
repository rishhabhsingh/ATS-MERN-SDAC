import { useState } from 'react'

const UseState = () => {
    const [a, setA] = useState(10)
    const [text, setText] = useState(10)
  return (
    <div>
        <h1>A: {a}</h1>
        <button onClick={() => setA(a+1)}>Increment</button>
        <button onClick={() => setText("Clicked...")}>{text}</button>
    </div>
  )
}

export default UseState