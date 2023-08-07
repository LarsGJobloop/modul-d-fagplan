There are many more events that is produced by the DOM than we can list here.
Explore!

- Click Event
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

- Mouse Enter
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