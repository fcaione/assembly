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

  Modal.setAppElement('#root');

	return (
		<Modal
    isOpen={props.toggleJoining}
    onRequestClose={closeModal}
    style={customStyles}
    >
			<div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-2">
					<label htmlFor="">Role</label>
					<input type="text" name="role" onChange={handleChange} placeholder="Enter your current role at this organization" className="border-black border-2 px-2"/>
					<label htmlFor="">Active</label>
					<select name="is_active" onChange={handleChange} className="border-black border-2">
						<option hidden> Please select a value</option>
						<option value={true}>Currently a part of this organization</option>
						<option value={false}>Not an active member in this organization</option>
					</select>
					<button>Submit</button>
					<button type="button" onClick={()=>props.setToggleJoining(false)}>Cancel</button>
				</form>
			</div>
		</Modal>
	)
}
export default JoinOrgForm
