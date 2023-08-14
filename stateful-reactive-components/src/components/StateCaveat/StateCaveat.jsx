import { useState } from "react"

export function StateCaveat() {
  const [ count, setCount ] = useState(0)

  function incrementThrice() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <div>
      <p>Current Count is: {count}</p>

      <button onClick={incrementThrice}>Does this work?</button>
    </div>
  )
}