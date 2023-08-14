export function InlineHandler() {
	return (
		<div>
			<button onClick={(clickEvent) => console.log(clickEvent)}>Log the onClick Event</button>
		</div>
	)
}