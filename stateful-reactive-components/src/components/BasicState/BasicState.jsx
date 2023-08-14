import { useState } from "react"

export function BasicState() {
  const [ state, setState ] = useState(0)

  return (
    <div>
      <p>Current Count is: {state}</p>
      {/* Setting an explicit state */}
      <button onClick={() => setState(0)}>Reset</button>

      {/* Using the previous state to calculate the new state */}
      <button onClick={() => setState((oldValue) => oldValue + 1)}>Increment</button>
      <button onClick={() => setState((oldValue) => oldValue - 1)}>Decrement</button>
    </div>
  )
}