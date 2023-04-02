const OrgCard = (props) => {
	return (
		<div className="flex-row flex p-4 items-center">
				<img
					src={props.icon}
          className="w-14 h-14 rounded-full object-contain border border-slate-500 overflow-hidden bg-white"
				/>
			<div className="flex flex-col p-2">
				<h3 className="font-semibold">{props.name}</h3>
				<h2 className="italic text-sm">{props.location}</h2>
			</div>
		</div>
	)
}
export default OrgCard
