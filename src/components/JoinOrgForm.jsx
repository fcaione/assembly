import { useState } from "react"
import axios from "axios"
import Modal from "react-modal"

const JoinOrgForm = (props) => {
	const [formValues, setFormValues] = useState({
		user_id: props.user.userId,
		organization_id: props.selectedOrgId,
		role: "",
		is_active: "",
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		const res = axios.post("/user/organizations", formValues)
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
		props.setToggleJoining(false)
	}

	Modal.setAppElement("#root")

	return (
		<Modal
			isOpen={props.toggleJoining}
			onRequestClose={closeModal}
			style={customStyles}
		>
			<div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-2">
					<label
						htmlFor="role"
						class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
					>
						<input
							type="text"
							id="role"
              name="role"
							placeholder="Role"
							className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={handleChange}
						/>

						<span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Role
						</span>
					</label>
					<label htmlFor="">Active</label>
					<select
						name="is_active"
						onChange={handleChange}
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            
					>
						<option hidden> Please select a value</option>
						<option value={true}>Currently a part of this organization</option>
						<option value={false}>
							Not an active member in this organization
						</option>
					</select>
					<button className="bg-blue-800 text-white rounded-md p-1">Submit</button>
					<button className="bg-blue-800 text-white rounded-md p-1" type="button" onClick={() => props.setToggleJoining(false)}>
						Cancel
					</button>
				</form>
			</div>
		</Modal>
	)
}
export default JoinOrgForm