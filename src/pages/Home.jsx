import { useState, useEffect } from "react"
import axios from "axios"
import ViewOrgs from "../components/ViewOrgs"
import OrgDetails from "../components/OrgDetails"
import Banner from "../components/Banner"
import AddOrgForm from "../components/AddOrgForm"

const Home = ({ user }) => {
	useEffect(() => {
		getOrgs()
	}, [])

	const [orgs, setOrgs] = useState([])
	const [selectedOrg, setSelectedOrg] = useState({})
	const [toggleAddingOrg, setToggleAddingOrg] = useState(false)

	const getOrgs = async () => {
		const res = await axios.get("/organizations")
		setOrgs(res.data)
	}

	return (
		<>
			<Banner />
      <button onClick={()=>setToggleAddingOrg(true)}>Add Org</button>
			<div className="flex flex-row items-center h-[40rem] p-10">
				<ViewOrgs
					orgs={orgs}
					setSelectedOrg={setSelectedOrg}
					selectedOrg={selectedOrg}
				/>
				<OrgDetails selectedOrg={selectedOrg} user={user} />
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
