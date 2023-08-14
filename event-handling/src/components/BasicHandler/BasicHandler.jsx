export function BasicHandler() {
	return (
		<div onClick={() => console.log("Random element clicked")}>
			<h1>Click Me!</h1>

			<button onClick={() => console.log("Button clicked")}>This is more semantically correct</button>
		</div>
	)
}