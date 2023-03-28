const OrgCard = (props) => {
	console.log(props)
	return (
		<div className="my-2 flex-row flex">
			<img className="w-24" src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg" />
			<div className="flex flex-col">
				<h3>{props.name}</h3>
				<h2>location</h2>
			</div>
		</div>
	)
}
export default OrgCard
