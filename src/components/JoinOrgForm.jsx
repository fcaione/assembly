import { useState } from "react"
import Client from "../services/auth"
import Modal from "react-modal"

const JoinOrgForm = (props) => {
	const [formValues, setFormValues] = useState({
		user_id: props.user.id,
		organization_id: props.selectedOrgId,
		role: props.selectedUserOrg?.role || "",
		is_active: props.selectedUserOrg?.is_active || "",
	})

  console.log(props)

	const handleSubmit = async (e) => {
		e.preventDefault()
    if (props.update) {
      const res = await Client.put(`/user/organizations/${props.selectedUserOrg.id}`, formValues)
      props.setToggleJoining(false)
      props.getUser()
      console.log(res)
    } else {
      const res = await Client.post("/user/organizations", formValues)
      props.setToggleJoining(false)
			props.getUser()
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
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-900 focus-within:ring-1 focus-within:ring-sky-900"
					>
						<input
							type="text"
							id="role"
              name="role"
							placeholder="Role"
							className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              onChange={handleChange}
              value={formValues.role}
						/>

						<span className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
							Role
						</span>
					</label>
					<label htmlFor="Activity"></label>
					<select
						name="is_active"
						onChange={handleChange}
						className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-sky-900 focus-within:ring-1 focus-within:ring-sky-900"
            value={formValues.is_active}
					>
						<option hidden> Select current affiliation </option>
						<option value={true}>Currently a part of this organization</option>
						<option value={false}>
							Not an active member in this organization
						</option>
					</select>
					<button className="bg-sky-900 text-white rounded-lg p-1">Submit</button>
					<button className="bg-sky-900 text-white rounded-lg p-1" type="button" onClick={() => props.setToggleJoining(false)}>
						Cancel
					</button>
				</form>
			</div>
		</Modal>
	)
}
export default JoinOrgForm