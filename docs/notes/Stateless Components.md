At its core React is a templating framework for creating reusable pieces of HTML through an extension to the JavaScript language with something we calls JSX (JavaScript Syntax Extension).

## Content
- [JSX Basics](#jsx-basics)
- [JSX and JavaScript](#jsx-and-javascript)
- [Properties](#properties)

## JSX Basics

```jsx
const jsxType = ( <h1>Hello World</h1> )

function Showcase() {
	return (
		<h1 className="my-component">I am a Static React Component</h1>
	)
}

function App() {
	return <Showcase />
}
```

The foundation for this is with a special type introduced through an extension to the JavaScript language called JSX or JavaScript XML. These are defined by using a set of parentheses and within those we can write our HTML.

The way these are commonly setup is through functions which returns JSX, it is this set of functions that we call **Components**. Combine this with EcmaScript Modules and you have quite capable tools for creating expressive applications with a set of tailored components libraries.

Note that due to this being HTML inside JavaScript some of the HTML attributes have changed their name, the convention followed is the *lowerCaseCamelCase* rather than the *lower-case-kebab-case*. This is due to JavaScript using a set of these word as language keywords.

## JSX and JavaScript

```jsx
function JavaScriptInComponents() {
	const textMessage = "A JavaScript string"

	return (
		<h1 className="my-component">{ textMessage }</h1>
	)
}

function App() {
	return <JavaScriptInComponents />
}
```

To use JavaScript inside an JSX expression we have to wrap it in a set of curly braces.

## Properties (Props)
```jsx
function Greeting(properties) {
	console.log(properties)

	return (
		<h1>Hello { properties.name }</h1>
	)
}

function App() {
	return <Greeting name="Fiona" />
}
```

Purely static components are convenient but some more dynamic content would be nice. React does this by having you define the arguments to the function as a set of custom HTML attributes, wrapping those into an object and then passing that property object to the function. You will usually see this shortened to just the **props** object.

## Containers / Children
```jsx
function CustomContainer(properties) {
	console.log(properties)

	return (
		<div>
			{ properties.children }
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

Similar to the custom HTML attributes there is a way to create custom container components. These children components will be accessible through the **children** field on the **properties** object.

## Generating Lists
```jsx
function TodoList(properties) {
	return (
		<ul>
			{
				properties.todoes.map((todo) => {
					return (
						<li key={ todo.id }>
							<h2>{ todo.name }</h2>
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
		{id: 1, name: "Gregory"},
		{id: 2, name: "Gregor"},
		{id: 3, name: "Gre"},
	]

	return <TodoList todoes={ todoes } />
}
```

To dynamically generate a list of some elements from a data source we put all of our data into a list (JavaScript Array) and then use the **Array.map** method to generate a list of JSX elements which we can use in our application.

Due to how React keeps track of the generated JSX nodes we have to pass in a **key** property to the returned JSX element. While not required for the example shown here, avoiding to do so can lead to issues if we start to sort the list we are using.

## Properties Destructuring

A common way to make to write less or more concise code is to use JavaScript destructuring.
It comes in two variation with the second (inline) variation most common.

### Variant - Normal
```jsx
function Greeting(properties) {
	const { name } = properties
	
	// Component logic
	
	return (
		<h1>Hello { name }</h1>
	)
}

function App() {
	return <Greeting name="Fiona" />
}
```

### Variant - Inline
```jsx
function Greeting({
	name
	}) {
	
	// Component logic
	
	return (
		<h1>Hello {name}</h1>
	)
}

function App() {
	return <Greeting name="Fiona" />
}
```

### Class Components

Do not use this one. It's from an older version of React and is highly discouraged. It is only here for completeness.

```jsx
import { Component } from 'react'

  
class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	increment = () => {
		this.setState(prevState => ({ count: prevState.count + 1 }));
	};

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<p>Count: {this.state.count}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

function App() {
	return <Counter />
}
```