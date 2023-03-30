const OrgCard = (props) => {
	return (
		<div className="my-2 flex-row flex">
			<div className="w-24 p-4">
				<img
					src={props.icon}
				/>
			</div>
			<div className="flex flex-col p-2">
				<h3>{props.name}</h3>
				<h2>{props.location}</h2>
			</div>
		</div>
	)
}
export default OrgCard
