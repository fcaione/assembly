import { useState } from "react"
import JoinOrgForm from "./JoinOrgForm"
import { useNavigate } from "react-router-dom"

const OrgDetails = ({ selectedOrg, user }) => {
	const [toggleJoining, setToggleJoining] = useState(false)
	const navigate = useNavigate()

	return (
		selectedOrg && (
			<>
				<div className="w-3/5 h-full p-10 overflow-y-scroll flex flex-col border border-slate-300">
					<h1 className="text-4xl font-semibold text-center my-2">
						{selectedOrg.name}
					</h1>
					<h4 className="italic text-center my-0">{selectedOrg.location}</h4>
					{user &&
						user?.organizations?.some(
							(org) => org.organization.id === selectedOrg.id
						) && (
							<div>
								<button className="bg-blue-800 text-white rounded-md p-1">
									Already joined
								</button>
							</div>
						)}
					{user &&
						!user?.organizations?.some(
							(org) => org.organization.id === selectedOrg.id
						) && (
							<div>
								{/* <button
									className="bg-blue-800 text-white rounded-md p-1"
									onClick={() => setToggleJoining(true)}
								>
									Join Org
								</button> */}
								<button
									className="group relative inline-block overflow-hidden border border-blue-900 px-6 py-1 focus:outline-none focus:ring rounded-lg"
									onClick={() => setToggleJoining(true)}
								>
									<span className="absolute inset-y-0 left-0 w-[2px] bg-blue-600 transition-all group-hover:w-full group-active:bg-blue-500"></span>

									<span className="relative text-sm font-medium text-blue-600 transition-colors group-hover:text-white">
										Join Org
									</span>
								</button>
							</div>
						)}
					{!user && (
						<button
							className="bg-blue-800 text-white rounded-md p-1"
							onClick={() => navigate("/login")}
						>
							Sign in to join an org
						</button>
					)}
					<h3 className="my-8 font-medium">About the organization:</h3>
					<p className="ml-5">{selectedOrg.description}</p>
					<button
						className="group relative inline-block overflow-hidden border border-blue-900 px-6 py-1 focus:outline-none focus:ring rounded-lg"
						onClick={() => navigate(`/organization/${selectedOrg.id}`)}
					>
						<span className="absolute inset-y-0 left-0 w-[2px] bg-blue-600 transition-all group-hover:w-full group-active:bg-blue-500"></span>

						<span className="relative text-sm font-medium text-blue-600 transition-colors group-hover:text-white">
							View list of employees
						</span>
					</button>
				</div>

				{toggleJoining && (
					<JoinOrgForm
						user={user}
						selectedOrgId={selectedOrg.id}
						toggleJoining={toggleJoining}
						setToggleJoining={setToggleJoining}
						update={false}
					/>
				)}
			</>
		)
	)
}
export default OrgDetails
