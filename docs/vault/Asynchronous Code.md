## Logging the Component life cycle
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