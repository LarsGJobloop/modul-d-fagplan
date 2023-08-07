## Basic
```jsx
function Showcase() {
	return (
		<h1>I am a Static React Component</h1>
	)
}

function App() {
	return <Showcase />
}
```

## Properties (Props)
```jsx
function Greeting(properties) {
	return (
		<h1>Hello {properties.name}</h1>
	)
}

function App() {
	return <Greeting name="Fiona" />
}
```

## Containers / Children
```jsx
function CustomContainer(properties) {
	return (
		<div>
			{properties.children}
		</div>
	)
}


function App() {
	return (
		<CustomContainer>
			<h1>Testing containers</h1>
			<p>Wrapping things up</p>
		</CustomContainer>
	)
}
```

## Generating Lists
```jsx
function TodoList(properties) {
	return (
		<ul>
			{
				properties.todoes.map((todo) => {
					return (
						<li key={todo.id}>
							<h2>{todo.name}</h2>
						</li>
					)
				})
			}
		</ul>
	)
}

function App() {
	const todoes = [
		{id: 0, name: "Greg"},
		{id: 0, name: "Gregory"},
		{id: 0, name: "Gregor"},
		{id: 0, name: "Gre"},
	]

	return <TodoList todoes={todoes} />
}
```

## Properties Destructuring

### Normal
```jsx
function Greeting(properties) {
	const { name } = properties

	return (
		<h1>Hello {name}</h1>
	)
}

function App() {
	return <Greeting name="Fiona" />
}
```

### Inline
```jsx
function Greeting({
	name
	}) {
	return (
		<h1>Hello {name}</h1>
	)
}

function App() {
	return <Greeting name="Fiona" />
}
```

### Class Components

Do not use this one. It's discouraged and is only here for completeness

```jsx
function Greeting({
	name
	}) {
	return (
		<h1>Hello {name}</h1>
	)
}

function App() {
	return <Greeting name="Fiona" />
}
```