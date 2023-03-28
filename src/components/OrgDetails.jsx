import { useState } from "react"
import JoinOrgForm from "./JoinOrgForm"

const OrgDetails = ({ selectedOrg }) => {
	const [toggleJoining, setToggleJoining] = useState(false)

	return (
		selectedOrg && (
			<>
				<div className="w-3/5 h-80 my-10 overflow-y-scroll flex flex-col">
					<h1 className="text-4xl font-semibold text-center my-2">
						{selectedOrg.name}
					</h1>
					<h4 className="italic text-center my-0">{selectedOrg.location}</h4>
					{
						//some conditional about user existing
						<div>
							<button
								className="bg-blue-800 text-white rounded-md p-1"
								onClick={() => setToggleJoining(true)}
							>
								Join Org
							</button>
						</div>
					}
					<h3 className="my-8 font-medium">About the organization:</h3>
					<p className="ml-5">{selectedOrg.description}</p>
				</div>
				{toggleJoining && <JoinOrgForm selectedOrgId={selectedOrg.id}/>}
			</>
		)
	)
}
export default OrgDetails
