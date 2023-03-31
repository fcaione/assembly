import { useState, useEffect } from "react"
import axios from "axios"
import ViewOrgs from "../components/ViewOrgs"
import OrgDetails from "../components/OrgDetails"
import Banner from "../components/Banner"

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
			<Banner />
			<div className="flex flex-row items-center h-[40rem] p-10">
				<ViewOrgs orgs={orgs} setSelectedOrg={setSelectedOrg} selectedOrg={selectedOrg}/>
				<OrgDetails selectedOrg={selectedOrg} user={user}/>
			</div>
		</>
	)
}
export default Home
