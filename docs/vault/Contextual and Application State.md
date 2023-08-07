## Contexts

## Context Basics

### Setup
```jsx
import { createContext, useContext } from 'react'

const themeContext = createContext("bright")

function ContextProvider(properties) {
	return (
		<themeContext.Provider value="dark">
			{properties.children}
		</themeContext.Provider>
	)
}

function useThemeContext() {
	return useContext(themeContext)
}
```

### Usage
```jsx
function SomeConsumer() {
	const theme = useThemeContext()

	return (
		<div>
			<h2>The current theme is: {theme}</h2>
		</div>
	)
}

function App() {
	return <SomeConsumer />
}
```

## Contextual State<br>*- Loosely connected components*

TODO! Find some <u>simple</u> example of how context can be used.

## Application State

### Setup
```jsx
import { createContext, useContext, useState } from 'react'

const userContext = createContext(undefined)

function UserProvider(properties) {
	const [ user, setUser ] = useState(null)

	return (
		<userContext.Provider value={{user, setUser}}>
			{properties.children}
		</userContext.Provider>
	)
}

function useUserInfo() {
	const { user, setUser } = useContext(userContext)

	if( user === undefined ) {
		throw new Error("useUserInfo can only be used in children of UserProvider")
	}

	const isLoggedIn = (user !== null) ? true : false

	function login () {
		setUser({name: "Mario"})
	}
	
	function login () {
		setUser(null)
	}

	return {
		user,
		isLoggedIn,
		login,
		logout,
	}
}
```

### Usage
```jsx
function Navbar() {
	const {
		user,
		isLoggedIn,
		login,
		logout,
	} = useUserInfo()

	return (
		<header>
			{
				isLoggedIn
				? 
				<>
					<h1>User: {user.name}</h1>
					<button onClick={logout}>Sign out</button>
				</>
				:
				<>
					<h1>Please sign in</h1>
					<button onClick={login}>Sign in</button>
				</> 
			}
		</header>
	)
}

function App() {
	return (
		<UserProvider>
			<Navbar />
		</UserProvider>
	)
}
```