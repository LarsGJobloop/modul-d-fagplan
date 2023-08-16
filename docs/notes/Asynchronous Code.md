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
import { useEffect } from 'react'

function Lifecycle() {
	useEffect(
		() => {
			console.log("This component entered the stage")

			return () => {
				console.log("This component left the stage")
			}
		}
	)

	return (
		<h1>Hello There</h1>
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
async function fetchData(url, dataCallback, errorCallback) {
	const response = await fetch(url)
		.catch(() => {
			errorCallback("Could not reach server")
			return
		})
	
	if(!response.ok) {
		errorCallback("Server responded with error")
		return
	}
	
	const data = await response.json()
		.catch(() => {
			errorCallback("Could not parse response")
			return
		})
	dataCallback(data)
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
