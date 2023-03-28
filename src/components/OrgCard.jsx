const OrgCard = (props) => {
	console.log(props)
	return (
		<div className="my-2 flex-row flex">
			<div className="w-24 p-4">
				<img
					src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg"
				/>
			</div>
			<div className="flex flex-col p-2">
				<h3>{props.name}</h3>
				<h2>location</h2>
			</div>
		</div>
	)
}
export default OrgCard
