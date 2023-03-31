import { useState } from "react"
import JoinOrgForm from "./JoinOrgForm"
import { useNavigate } from "react-router-dom"

const OrgDetails = ({ selectedOrg, user }) => {
	const [toggleJoining, setToggleJoining] = useState(false)

  const navigate = useNavigate()

  console.log(selectedOrg)

	return (
		selectedOrg && (
			<>
				<div className="w-3/5 h-80 my-10 overflow-y-scroll flex flex-col">
					<h1 className="text-4xl font-semibold text-center my-2">
						{selectedOrg.name}
					</h1>
					<h4 className="italic text-center my-0">{selectedOrg.location}</h4>
					{
						user ?
						<div>
							<button
								className="bg-blue-800 text-white rounded-md p-1"
								onClick={() => setToggleJoining(true)}
							>
								Join Org
							</button>
						</div>
            :
            <button
								className="bg-blue-800 text-white rounded-md p-1"
								onClick={() => navigate("/login")}
							>
								Sign in to join an org
							</button>
					}
					<h3 className="my-8 font-medium">About the organization:</h3>
					<p className="ml-5">{selectedOrg.description}</p>
          <button
								className="bg-blue-800 text-white rounded-md p-1"
								onClick={() => navigate(`/organization/${selectedOrg.id}`)}
							>
								View list of employees
							</button>
				</div>
        
				{toggleJoining && <JoinOrgForm user={user} selectedOrgId={selectedOrg.id} toggleJoining={toggleJoining} setToggleJoining={setToggleJoining} update={false}/>}
			</>
		)
	)
}
export default OrgDetails
