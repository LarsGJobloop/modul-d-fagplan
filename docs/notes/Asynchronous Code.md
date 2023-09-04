## Problem
Having a state full component (or parent to component) causes a re execution of all the code on every rerender.
```jsx
import { useState } from 'react'

function ProblemComponent() {
	const [ count, setCount ] = useState(0)

	console.log(`
		Something caused a 'rerender' of this component.
		This could be that this component changed its state,
		or that a ancestor component changed its state.
	`)

	return (
		<>
			<h1>Hello There</h1>
			<button onClick={() => setCount(old => old + 1)}>Change State</button>
		</>
	)
}

function App() {
	const [ count, setCount ] = useState(0)

	return (
		<>
			<ProblemComponent />
			<button onClick={() => setCount(old => old + 1)}>Change State</button>			
		</>
	)
}
```

## Logging the Component life cycle

A simple construct for feeling out when the various parts of the useEffect hook executes.

```jsx
import { useEffect, useState } from 'react'

function Lifecycle() {
	const [state, setState] = useState(false)

	console.log("This components state, or an ancestor components state changed")

	useEffect(
		() => {
			console.log("This component got mounted")

			return () => {
				console.log("This component got unmounted")
			}
		}
	)

	function update() {
		setState(previous => !previous)
	}

	return (
		<button onClick={update}>Rerender</button>
	)
}
```


## Limited Execution

### Only on entry
```jsx
import { useEffect } from 'react'

function Lifecycle() {

	useEffect(
		() => {
			console.log("This component entered the stage")

			return () => {
				console.log("This component left the stage")
			}
		},
		[]
	)

	return (
		<h1>Hello There</h1>
	)
}
```

### Listening for a specific state changes
```jsx
import { useEffect, useState } from 'react'

function Lifecycle() {
	const [ sound, setSound ] = useState(0)
	const [ deaf, setDeaf ] = useState(0)

	useEffect(
		() => {
			console.log("This component entered the stage")

			return () => {
				console.log("This component left the stage")
			}
		},
		[sound]
	)

	return (
		<>
			<button onClick={setSound(oldCount => oldCount + 1)}>
				Rerender and log
			</button>
			<button onClick={setDeaf(oldCount => oldCount + 1)}>>
				Rerender but do not log
			</button>
		</>
	)
}
```

## Declarative Abstractions
```jsx
import { useEffect, useState } from 'react'

function useApiData(url) {
	const [ data, setData ] = useState(null)

	useEffect(() => {
		fetchData(url, setData)
		},
		[]
	)

	return {
		data
	}
}

/**
* Async function for fetching data from an api
*
* @param {string} url for the API
* @param {(data: any) => void} dataCallback Will be called with the data as the argument
*/

async function fetchData(url, dataCallback) {
	const response = await fetch(url)
	const data = await response.json()
	dataCallback(data)
}
```


## Handling every eventuality
```jsx
import { useEffect, useState } from 'react'

/**
* Async function for fetching data from an api
*
* @param {string} url for the API
* @returns {{
*  data: null | any,
*  isLoading: boolean,
*  error: null | any,
* }}
*/
function useApiData(url) {
	const [ data, setData ] = useState(null)
	const [ error, setError ] = useState(null)

	const isLoading = ( data | error ) ? false : true

	useEffect(() => {
		fetchData(url, setData, setError)
		},
		[]
	)

	return {
		data,
		isLoading,
		error
	}
}

/**
* Async function for fetching data from an API
*
* @param {string} url for the API
* @param {(data: any) => void}
* @param {(error: any) => void}
*/
async function fetchData(url, dataHandler, errorHandler) {
	const response = await fetch(url)
		.catch(() => {
			errorCallback("Could not reach server")
			return
		})
	
	if(!response.ok) {
		errorHandler(`Server responded with error ${response.status}`)
		return
	}
	
	const data = await response.json()
		.catch(() => {
			errorHandler("Could not parse response")
			return
		})
		
	dataHandler(data)
}
```

## Cleanup
Some functions in programming have what we call *side effects*. They causes something to happen elsewhere which changes the state of our application. These are likely to require some form of cleanup to reset the system to the state it was in before the function call.

```jsx
import { useEffect, useState } from 'react'  

function ComponentWithSideEffect() {
	const [ count, setCount ] = useState(0)
	useEffect(
		() => {
			setInterval(
				() => {
					console.log("Interval passed")
					setCount(oldCount => oldCount + 1)
				},
				1000
			)
		},
		[]
	)
	
	return (
		<div>
			<h2>Component with an Effect</h2>
			<h3>Counter: {count}</h3>
		</div>
	)
}

function App() {
	const [ show, setShow ] = useState(true)

	function toggle() {
		setShow(old => !old)
	}

	return (
		<div>
			<h1>Look at the console</h1>
			<button onClick={toggle}>Toggle</button>
			{
				show
				? <ComponentWithSideEffect />
				: <h2>Dismounted</h2>
			}
		</div>
	)
}
```
## Addendum

### Value types and reference types
Consider the following and guess what will be printed to the console.
```js
const numberA = 5
const numberB = 5
console.log(numberA === numberB)

const objectA = { id: 1, data: "Foobar" }
const objectB = { id: 1, data: "Foobar" }
console.log(objectA === objectB)
```
Did the result diverge from your expectation? If so, in what way, and why?