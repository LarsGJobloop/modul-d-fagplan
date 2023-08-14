## Internal State

To keep track of state that creates variation in the document, we have to coordinate with React. The way this is done is through a function ( called a hook). What is returned from the **React.useState** function is an array, where the first item is the current state and the second item is a function for setting that state.

This is done so React can collect all changes that is happening into a batch. And then recreate the DOM in one pass rather then causing a redraw for each state change.

```jsx
import { useState } from 'react'

function Counter() {
	const [ count, setCount ] = useState(0)
	
	function reset() {
		setCount(0)
	}
	
	function increment() {
		setCount(oldValue => oldValue + 1)
	}

	return (
		<div>
			<h2>Current Count is: {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}
```

This also means that if we do not pass the *state setter* a function for updating the state, but rely on the current state for our update things might go awry. Test out the following example
```jsx
import { useState } from 'react'

function Counter() {
	const [ count, setCount ] = useState(0)
	
	function incrementThrice() {
		setCount(count + 1)
		setCount(count + 1)
		setCount(count + 1)
	}
	
	return (
		<div>
			<h2>Current Count is: {count}</h2>
			<button onClick={incrementThrice}>Increment Thrice?</button>
		</div>
	)
}
```
## Controlling the DOM state

Some HTML elements keeps track of their internal state themselves. To keep the state tracked by React synchronized with the state tracked by the DOM we simply overwrite the DOM state with our own state.
```jsx
import { useState } from 'react'

function UserInput() {
	const [ firstName, setFirstName ] = useState("")

	return (
		<div>
			<input type="text" value={firstName} onChange={updateFirstName}/>

			<h2>Hello {firstName}</h2>
		</div>
	)
}

function updateFirstName(event, callback) {
	const inputField = event.target
	callback(inputField.value)
}
```

## Derived Values
  Do not track more state than necessary. If you can derive it do so.
```jsx
import { useState } from 'react'

function UserInput() {
	const [ firstName, setFirstName ] = useState("")
	const [ lastName, setLastName ] = useState("")

	const fullName = `${firstName} ${lastName}`

	function updateFirstName(event) {
		const inputField = event.target
		setFirstName(inputField.value)
	}

	function updateLastName(event) {
		const inputField = event.target
		setFirstName(inputField.value)
	}

	return (
		<div>
			<input type="text" value={firstName} onChange={updateFirstName}/>
			<input type="text" value={lastName} onChange={updateLastName}/>

			<h2>Hello {fullName}</h2>
		</div>
	)
}
```

## Functional Approach
  Defining functions inside the components themselves has some detrimental effects.
  1. The browser recreates them on each rerender of the component, wasting systems resources.
  2. Internal functions are hard to test.
  
  The solution is to extract them into their own separate functions and pass in any values they need as arguments.
```jsx
import { useState } from 'react'

function Counter() {
	const [ count, setCount ] = useState(0)

	return (
		<div>
			<h2>Current Count is: {count}</h2>
			<button onClick={() => increment(setCount)}>Increment</button>
			<button onClick={() => reset(setCount)}>Reset</button>
		</div>
	)
}

function reset(stateSetter) {
	stateSetter(0)
}

function increment(stateSetter) {
	stateSetter(oldValue => oldValue + 1)
}
```