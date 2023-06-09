import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import JoinOrgForm from "../components/JoinOrgForm"
import { IoBusinessSharp } from "react-icons/io5"
import AddOrgForm from "../components/AddOrgForm"
import Client from "../services/auth"

const ProfileDetails = ({ user }) => {
	const [profile, setProfile] = useState({})
	const [toggleJoining, setToggleJoining] = useState(false)
	const [toggleEditing, setToggleEditing] = useState(false)
	const [selectedOrgId, setSelectedOrgId] = useState({})
	const [selectedUserOrg, setSelectedUserOrg] = useState()

	const { userId } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		getUser()
	}, [])

	const getUser = async () => {
		const res = await Client.get(`/users/${userId}`)
		setProfile(res.data)
		console.log(res.data)
	}

	const handleUserOrgUpdate = (org) => {
		setSelectedOrgId(org.organization.id)
		setSelectedUserOrg(org)
		setToggleJoining(true)
	}

	const handleUserOrgDelete = async (org) => {
		await Client.delete(`/user/organizations/${org.id}`)
		getUser()
	}

	const handleOrgUpdate = async (org) => {
		setSelectedOrgId(org)
		setToggleEditing(true)
	}

	const handleOrgDelete = async (org) => {
		await Client.delete(`/organizations/${org.id}`)
		getUser()
	}

	return (
		<div>
			<div className="flex justify-center items-center">
				<img
					src={profile.profile_picture}
					alt=""
					className="rounded-full h-24 w-24 object-cover mt-10"
				/>
			</div>
			<h3 className="text-center font-bold text-3xl pb-10 mt-5">
				<span className="capitalize">{profile.name}</span>'s profile
			</h3>
			<h3 className="text-center font-bold">Joined Organizations</h3>
			<div className="flex flex-row flex-wrap items-center justify-center py-4 gap-10">
				{profile.organizations?.map((org) => (
					<div
						className="group relative block h-64 sm:h-80 lg:h-96"
						key={org.id}
					>
						<span className="absolute inset-0 border-2 border-dashed border-black"></span>

						<div className="relative flex h-full w-64 lg:w-72 transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
							<div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
								<IoBusinessSharp size={45} />

								<h2 className="mt-4 text-xl font-medium sm:text-2xl">
									{org.organization.name}
								</h2>
								<h2 className="mt-4 text-xl font-light italic sm:text-2xl">
									{org.organization.location}
								</h2>
							</div>

							<div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 max h-64 sm:h-[19.8rem] lg:h-[23.8rem] overflow-y-scroll">
								<h2 className="mt-4 text-xl font-medium sm:text-2xl text-center">
									{org.organization.name}
								</h2>

								<h2 className="mt-4 text-xl font-light italic sm:text-2xl text-center">
									{org.organization.location}
								</h2>

								<h3 className="mt-4 text-xl font-medium sm:text-2xl">
									{org.role}
								</h3>

								<p className="mt-4 text-sm sm:text-base">
									{org.organization.description}
								</p>

								{user?.id === org.user_id && (
									<div className="">
										<button
											className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
											onClick={() => handleUserOrgUpdate(org)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
												/>
											</svg>
											Edit
										</button>

										<button
											className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
											onClick={() =>
												navigate(`/organization/${org.organization.id}`)
											}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											View Employees
										</button>

										<button
											className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
											onClick={() => handleUserOrgDelete(org)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
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

			{/* orgs owned */}

			<h3 className="text-center font-bold">Owned Organizations</h3>
			<div className="flex flex-row flex-wrap items-center justify-center py-4 gap-10">
				{profile.organizations_owned?.map((org) => (
					<div
						className="group relative block h-64 sm:h-80 lg:h-96"
						key={org.id}
					>
						<span className="absolute inset-0 border-2 border-dashed border-black"></span>

						<div className="relative flex h-full w-64 lg:w-72 transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
							<div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
								<IoBusinessSharp size={45} />

								<h2 className="mt-4 text-xl font-medium sm:text-2xl">
									{org.name}
								</h2>
								<h2 className="mt-4 text-xl font-light italic sm:text-2xl">
									{org.location}
								</h2>
							</div>

							<div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 max h-64 sm:h-[19.8rem] lg:h-[23.8rem] overflow-y-scroll">
								<h2 className="mt-4 text-xl font-medium sm:text-2xl text-center">
									{org.name}
								</h2>

								<h2 className="mt-4 text-xl font-light italic sm:text-2xl text-center">
									{org.location}
								</h2>

								<p className="mt-4 text-sm sm:text-base overflow-y-scroll">
									{org.description}
								</p>

								{user?.id === org.owner_id && (
									<div className="">
										<button
											className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
											onClick={() => handleOrgUpdate(org)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
												/>
											</svg>
											Edit
										</button>

										<button
											className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
											onClick={() => navigate(`/organization/${org.id}`)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											View Employees
										</button>

										<button
											className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
											onClick={() => handleOrgDelete(org)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
												/>
											</svg>
											Delete Org
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Joining organization form */}

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

			{/* Editing organization form */}

			{toggleEditing && (
				<AddOrgForm
					toggleEditing={toggleEditing}
					setToggleEditing={setToggleEditing}
					selectedOrg={selectedOrgId}
					update={true}
					user={user}
					getUser={getUser}
				/>
			)}
		</div>
	)
}
export default ProfileDetails
