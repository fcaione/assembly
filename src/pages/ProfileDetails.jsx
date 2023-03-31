import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import JoinOrgForm from "../components/JoinOrgForm"
import { IoBusinessSharp } from "react-icons/io5"

const ProfileDetails = ({ user }) => {
	const [profile, setProfile] = useState({})
	const [toggleJoining, setToggleJoining] = useState(false)
	const [selectedOrgId, setSelectedOrgId] = useState({})
	const [selectedUserOrg, setSelectedUserOrg] = useState()

	const { userId } = useParams()
  const navigate = useNavigate()

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
			<h3 className="text-center font-bold">{profile.name}'s profile</h3>
			<h3 className="text-center font-bold">Joined Organizations</h3>
			<div className="flex flex-row flex-wrap items-center justify-center py-4 gap-10">
				{profile.organizations?.map((org) => (
					<div class="group relative block h-64 sm:h-80 lg:h-96">
						<span class="absolute inset-0 border-2 border-dashed border-black"></span>

						<div class="relative flex h-full w-64 lg:w-72 transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
							<div class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
								<IoBusinessSharp size={45} />

								<h2 class="mt-4 text-xl font-medium sm:text-2xl">
									{org.organization.name}
								</h2>
								<h2 class="mt-4 text-xl font-light italic sm:text-2xl">
									{org.organization.location}
								</h2>
							</div>

							<div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
								<h2 class="mt-4 text-xl font-medium sm:text-2xl text-center">
									{org.organization.name}
								</h2>

								<h2 class="mt-4 text-xl font-light italic sm:text-2xl text-center">
									{org.organization.location}
								</h2>

								<h3 class="mt-4 text-xl font-medium sm:text-2xl">{org.role}</h3>

								<p class="mt-4 text-sm sm:text-base overflow-y-scroll">
									{org.organization.description}
								</p>

								{user?.id === org.user_id && (
									<div className="">
										<button
											class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
											onClick={() => handleUpdate(org)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="h-4 w-4"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
												/>
											</svg>
											Edit
										</button>

										<button class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative" 	onClick={() => navigate(`/organization/${org.organization.id}`)}>

											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="h-4 w-4"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											View Employees
										</button>

										<button
											class="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
											onClick={() => handleDelete(org)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="h-4 w-4"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
												/>
											</svg>
											Leave Org
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
			{toggleJoining && (
				<JoinOrgForm
					setToggleJoining={setToggleJoining}
					toggleJoining={toggleJoining}
					user={user}
					selectedOrgId={selectedOrgId}
					update={true}
					selectedUserOrg={selectedUserOrg}
					getUser={getUser}
				/>
			)}
		</div>
	)
}
export default ProfileDetails
