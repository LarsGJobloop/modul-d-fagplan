export function InternalHandler() {
	function logEvent(clickEvent) {
		console.log("InternalHandler")
		console.log(clickEvent)
	}

	return (
		<div>
			<button onClick={logEvent}>More than one line of handler logic</button>
		</div>
	)
}