import { useState, useEffect } from "react"
import ViewOrgs from "../components/ViewOrgs"
import OrgDetails from "../components/OrgDetails"
import Banner from "../components/Banner"
import AddOrgForm from "../components/AddOrgForm"
import Client from "../services/auth"
import { useNavigate } from "react-router-dom"

const Home = ({ user, getUser }) => {
	useEffect(() => {
		getOrgs()
		getUser()
	}, [])

	const [orgs, setOrgs] = useState([])
	const [selectedOrg, setSelectedOrg] = useState({})
	const [toggleAddingOrg, setToggleAddingOrg] = useState(false)
	
	const navigate = useNavigate()

	const getOrgs = async () => {
		const res = await Client.get("/organizations")
		setOrgs(res.data)
	}

	return (
		<>
			<Banner />
			<div className="flex justify-center mt-8">
				{user ? (
					<button
						className="group relative inline-block overflow-hidden border border-sky-900 px-6 py-1 focus:outline-none focus:ring rounded-lg"
						onClick={() => setToggleAddingOrg(true)}
					>
						<span className="absolute inset-y-0 left-0 w-[2px] bg-sky-700 transition-all group-hover:w-full group-active:bg-sky-500"></span>

						<span className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white">
							Add Organization
						</span>
					</button>
				) : (
					<button
						className="group relative inline-block overflow-hidden border border-sky-900 px-6 py-1 focus:outline-none focus:ring rounded-lg"
						onClick={() => navigate("/login")}
					>
						<span className="absolute inset-y-0 left-0 w-[2px] bg-sky-700 transition-all group-hover:w-full group-active:bg-sky-500"></span>

						<span className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white">
							Sign in to add org
						</span>
					</button>
				)}
			</div>
			<div className="flex flex-row items-center h-[40rem] p-10">
				<ViewOrgs
					orgs={orgs}
					setSelectedOrg={setSelectedOrg}
					selectedOrg={selectedOrg}
				/>
				<OrgDetails selectedOrg={selectedOrg} user={user} getUser={getUser} />
			</div>
			{toggleAddingOrg && (
				<AddOrgForm
					toggleEditing={toggleAddingOrg}
					setToggleEditing={setToggleAddingOrg}
					selectedOrg={null}
					update={false}
					user={user}
					getOrgs={getOrgs}
				/>
			)}
		</>
	)
}
export default Home
