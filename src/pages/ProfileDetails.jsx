import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProfileDetails = ({ user }) => {
	const [profile, setProfile] = useState({})
  const [toggleUpdating, setToggleUpdating] = useState(false)

	const { userId } = useParams()

	useEffect(() => {
		getUser()
	}, [])

	const getUser = async () => {
		const res = await axios.get(`/users/${userId}`)
		setProfile(res.data)
		console.log(res.data)
	}

	return (
		<div>
			<h3>{profile.name}'s profile</h3>
			<h3>Joined Organizations</h3>
			<div className="flex flex-row items-center justify-center">
				{profile.organizations?.map((org) => (
					<div
						key={org.organization.id}
						className="flex flex-col justify-center items-center shadow-lg w-60 gap-4"
					>
						<h2>{org.organization.name}</h2>
						<h2>{org.organization.location}</h2>
						<h2>{org.role}</h2>
						{org.is_active && <h2>Currently active</h2>}
						{!org.is_active && <h2>No longer active</h2>}
						{user.id === profile.id && <button className="bg-blue-800 text-white rounded-md p-1" onClick={() => setToggleUpdating(true)}>Leave organization</button>}
						<button className="bg-blue-800 text-white rounded-md p-1 mb-2">Update</button>
					</div>
				))}
			</div>
		</div>
	)
}
export default ProfileDetails
