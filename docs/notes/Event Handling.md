There are many more events that is produced by the DOM than we can list here.
Explore!

## Click Event

### Basic Handler
We do not care about the event
```jsx
function Clicker() {
	return (
		<button onClick={() => console.log("I was clicked")}>Click Me!</button>
	)
}
```

### Inline Event Handler
Passing the event object along
```jsx
function Clicker() {
	return (
		<button onClick={(clickEvent) => console.log(clickEvent)}>Click Me!</button>
	)
}
```

### Internal Event Handler
Separating the logic for the handler from the description of the GUI.
Recommended for any logic that can not be expressed in a single line.
```jsx
function Clicker() {
	function handleClick(clickEvent) {
		console.log(clickEvent)
	}

	return (
		<button onClick={handleClick}>Click Me!</button>
	)
}
```

### External Event Handler<br>*- The functional approach*
Extracting the event handler from the interior of the component.
**Reasons why you want to do this:**
- Having the function defined inside the component causes the function to be recreated whenever the component get rerendered.
- An external function can be reused in multiple components.
- External functions are much easier to setup unit tests for
**Cons:**
- If the function requires access to variables scoped to the component these will now have to be passed in as arguments. Some consider this a positive argument
```jsx
function Clicker() {
	return (
		<button onClick={handleClick}>Click Me!</button>
	)
}

function handleClick(clickEvent) {
	console.log(clickEvent)
}

```
## Mouse Enter
```jsx
function MouseFun() {
	function logEntering(mouseEvent) {
		console.log("Mouse entered: ")
		console.log(mouseEvent.target)
	}
	
	function logLeaving(mouseEvent) {
		console.log("Mouse left: ")
		console.log(mouseEvent.target)
	}
	
	return (
		<ul onMouseEnter={logEntering} onMouseLeave={logLeaving}>
			<li>Item #1</li>
			<li>Item #2</li>
		</ul>
	)
}