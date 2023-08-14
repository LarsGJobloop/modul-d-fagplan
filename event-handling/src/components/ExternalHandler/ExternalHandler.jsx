export function ExternalHandler() {
	return (
		<div>
			<button onClick={(event) => log(event, "ExternalHandler: Clicked")}>Reusable handlers</button>
		</div>
	)
}

/**
 * Stores the event and optional text in a log somewhere
 * 
 * @param {React.SyntheticEvent} clickEvent 
 * @param {string?} logText 
 */
function log(clickEvent, logText) {
	if (logText) {
		console.log(logText)
	}

	console.log(clickEvent)
}