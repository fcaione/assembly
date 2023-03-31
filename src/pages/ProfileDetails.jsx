import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import JoinOrgForm from "../components/JoinOrgForm"

const ProfileDetails = ({ user }) => {
	const [profile, setProfile] = useState({})
  const [toggleJoining, setToggleJoining] = useState(false)
  const [selectedOrgId, setSelectedOrgId] = useState({})
  const [selectedUserOrg, setSelectedUserOrg] = useState()

	const { userId } = useParams()

	useEffect(() => {
		getUser()
	}, [])

	const getUser = async () => {
		const res = await axios.get(`/users/${userId}`)
		setProfile(res.data)
		console.log(res.data)
	}

  const handleUpdate = (org) => {
    setSelectedOrgId(org.organization.id)
    setSelectedUserOrg(org)
    setToggleJoining(true)
  }

  const handleDelete = async (org) => {
    const res = await axios.delete(`/user/organizations/${org.id}`)
    getUser()
    console.log(res)
  }
	return (
		<div>
			<h3>{profile.name}'s profile</h3>
			<h3>Joined Organizations</h3>
			<div className="flex flex-row items-center justify-center">
				{profile.organizations?.map((org) => (
					<div
						key={org.id}
						className="flex flex-col justify-center items-center shadow-lg w-60 gap-4"
					>
						<h2>{org.organization.name}</h2>
						<h2>{org.organization.location}</h2>
						<h2>{org.role}</h2>
						{org.is_active && <h2>Currently active</h2>}
						{!org.is_active && <h2>No longer active</h2>}
						{ user?.id === org.user_id && <button className="bg-blue-800 text-white rounded-md p-1" onClick={() => handleDelete(org)}>Leave organization</button>}
						{ user?.id === org.user_id && <button className="bg-blue-800 text-white rounded-md p-1 mb-2" onClick={() => handleUpdate(org)}>Update</button>}
					</div>
				))}
			</div>
      {toggleJoining && <JoinOrgForm setToggleJoining={setToggleJoining} toggleJoining={toggleJoining} user={user} selectedOrgId={selectedOrgId} update={true} selectedUserOrg={selectedUserOrg} getUser={getUser}/>}
		</div>
	)
}
export default ProfileDetails
