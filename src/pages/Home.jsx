import { useState, useEffect } from "react"
import axios from "axios"
import ViewOrgs from "../components/ViewOrgs"
import OrgDetails from "../components/OrgDetails"

const Home = ({ user }) => {

  useEffect(() => {
    getOrgs()
  }, [])

  const [orgs, setOrgs] = useState([])
  const [selectedOrg, setSelectedOrg] = useState({})
  
  const getOrgs = async () => {
    const res = await axios.get("/organizations")
    setOrgs(res.data)
  }

	return (
		<>
			<div>Welcome to the fun</div>
			<div className="flex flex-row items-center">
				<ViewOrgs orgs={orgs} setSelectedOrg={setSelectedOrg} selectedOrg={selectedOrg}/>
				<OrgDetails selectedOrg={selectedOrg} user={user}/>
			</div>
		</>
	)
}
export default Home
