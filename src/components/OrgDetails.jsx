import { useState } from "react"
import JoinOrgForm from "./JoinOrgForm"
import { useNavigate } from "react-router-dom"

const OrgDetails = ({ selectedOrg, user, getUser }) => {
	const [toggleJoining, setToggleJoining] = useState(false)
	const navigate = useNavigate()

	return (
		selectedOrg && (
			<>
				<div className="w-3/5 h-full p-5 overflow-y-scroll flex flex-col border border-slate-300">
				{user &&
						user?.organizations?.some(
							(org) => org.organization.id === selectedOrg.id
						) && (
							<div>
								<button className="group relative inline-block overflow-hidden border border-sky-900 px-6 py-1 focus:outline-none focus:ring rounded-lg">
									<span className="absolute inset-y-0 left-0 w-[2px] bg-sky-700 transition-all group-hover:w-full group-active:bg-sky-500"></span>

									<span className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white">
										Joined
									</span>
								</button>
							</div>
						)}
					{user &&
						!user?.organizations?.some(
							(org) => org.organization.id === selectedOrg.id
						) && (
							<div>
								<button
									className="group relative inline-block overflow-hidden border border-sky-900 px-6 py-1 focus:outline-none focus:ring rounded-lg"
									onClick={() => setToggleJoining(true)}
								>
									<span className="absolute inset-y-0 left-0 w-[2px] bg-sky-700 transition-all group-hover:w-full group-active:bg-sky-500"></span>

									<span className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white">
										Join Org
									</span>
								</button>
							</div>
						)}
					{!user && (
						<div>
						<button
							className="group relative inline-block overflow-hidden border border-sky-900 px-6 py-1 focus:outline-none focus:ring rounded-lg"
							onClick={() => navigate("/login")}
						>
							<span className="absolute inset-y-0 left-0 w-[2px] bg-sky-700 transition-all group-hover:w-full group-active:bg-sky-500"></span>

							<span className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white">
								Sign in to join
							</span>
						</button>
					</div>
					)}
					<h1 className="text-4xl font-semibold text-center my-2">
						{selectedOrg.name}
					</h1>
					<h4 className="italic text-center my-0">{selectedOrg.location}</h4>

					<h3 className="my-8 font-medium">About the organization:</h3>
					<p className="ml-5">{selectedOrg.description}</p>
					<div className="text-center">
						<button
							className="group relative inline-block overflow-hidden border border-sky-900 px-6 py-1 focus:outline-none focus:ring rounded-lg my-6"
							onClick={() => navigate(`/organization/${selectedOrg.id}`)}
						>
							<span className="absolute inset-y-0 left-0 w-[2px] bg-sky-700 transition-all group-hover:w-full group-active:bg-sky-500"></span>

							<span className="relative text-sm font-medium text-sky-700 transition-colors group-hover:text-white">
								View Employees
							</span>
						</button>
					</div>
				</div>

				{toggleJoining && (
					<JoinOrgForm
						user={user}
						selectedOrgId={selectedOrg.id}
						toggleJoining={toggleJoining}
						setToggleJoining={setToggleJoining}
						update={false}
						getUser={getUser}
					/>
				)}
			</>
		)
	)
}
export default OrgDetails
