const OrgCard = (props) => {
	return (
		<div className="flex-row flex p-4 items-center">
			{/* <div className="w-24 p-4">
        </div> */}
				<img
					src={props.icon}
          className="w-14 h-14 rounded-full object-contain border border-slate-500 overflow-hidden"
				/>
			<div className="flex flex-col p-2">
				<h3>{props.name}</h3>
				<h2>{props.location}</h2>
			</div>
		</div>
	)
}
export default OrgCard
