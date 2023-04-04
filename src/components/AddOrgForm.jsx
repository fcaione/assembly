import { useState } from "react"
import Modal from "react-modal"
import Client from "../services/auth"

const AddOrgForm = (props) => {
	const [formValues, setFormValues] = useState({
		name: props.selectedOrg?.name || "",
		type: props.selectedOrg?.type || "",
		icon: props.selectedOrg?.icon || "",
		description: props.selectedOrg?.description || "",
		location: props.selectedOrg?.location || "",
		owner_id: props.user?.id,
	})

	console.log(props)

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (props.update) {
			const res = await Client.put(
				`/organizations/${props.selectedOrg.id}`,
				formValues
			)
			props.setToggleEditing(false)
			props.getUser()
			console.log(res)
		} else {
			const res = await Client.post("/organizations", formValues)
			props.setToggleEditing(false)
      props.getOrgs()
			console.log(res)
		}
	}

	const handleChange = (e) => {
		let updatedValue = e.currentTarget.value

		if (updatedValue === "true" || updatedValue == "false") {
			updatedValue = JSON.parse(updatedValue)
		}

		setFormValues({ ...formValues, [e.target.name]: updatedValue })
	}

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	}

	const closeModal = () => {
		props.setToggleEditing(false)
	}

	Modal.setAppElement("#root")

	return (
		<Modal
			isOpen={props.toggleEditing}
			onRequestClose={closeModal}
			style={customStyles}
		>
			<div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[20rem]">
					<label
						htmlFor="name"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-900 focus-within:ring-1 focus-within:ring-sky-900"
					  >
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Name"
							className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
							onChange={handleChange}
							value={formValues.name}
						/>
						<span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Name
						</span>
					</label>

					<label
						htmlFor="type"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-900 focus-within:ring-1 focus-within:ring-sky-900"
					>
						<input
							type="text"
							id="type"
							name="type"
							placeholder="Type"
							className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
							onChange={handleChange}
							value={formValues.type}
						/>
						<span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Type
						</span>
					</label>

          <label
						htmlFor="icon"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-900 focus-within:ring-1 focus-within:ring-sky-900"
					>
						<input
							type="text"
							id="icon"
							name="icon"
							placeholder="Image Address"
							className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
							onChange={handleChange}
							value={formValues.icon}
						/>
						<span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Image Address
						</span>
					</label>

          <label
						htmlFor="icon"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-900 focus-within:ring-1 focus-within:ring-sky-900"
					>
						<textarea
							type="text"
							id="description"
							name="description"
							placeholder="Description"
							className="peer w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
							rows={6}
							cols={10}
							onChange={handleChange}
							value={formValues.description}
						/>
						<span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
							Description
						</span>
					</label>

          <label
						htmlFor="icon"
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-900 focus-within:ring-1 focus-within:ring-sky-900"
					>
						<input
							type="text"
							id="location"
							name="location"
							placeholder="Location"
							className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
							onChange={handleChange}
							value={formValues.location}
						/>
						<span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Location
						</span>
					</label>

					<button className="bg-sky-900 text-white rounded-lg p-1">
						Submit
					</button>
					<button
						className="bg-sky-900 text-white rounded-lg p-1"
						type="button"
						onClick={() => props.setToggleEditing(false)}
					>
						Cancel
					</button>
				</form>
			</div>
		</Modal>
	)
}
export default AddOrgForm
