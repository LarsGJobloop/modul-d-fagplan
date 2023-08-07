export function ListingComponents(properties) {
	return (
		<ul>
			{
				properties.list.map((listElement) => {
					return (
						<li key={listElement.id}>
							<h2>{listElement.name}</h2>
						</li>
					)
				})
			}
		</ul>
	)
}