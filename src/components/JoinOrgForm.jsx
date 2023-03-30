import { useState } from "react"
import axios from "axios"

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

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="">role</label>
				<input type="text" name="role" onChange={handleChange} />
				<label htmlFor="">isActive</label>
				<select type="text" name="is_active" onChange={handleChange}>
					<option hidden> Please select a value</option>
					<option value={true}>Active</option>
					<option value={false}>Inactive</option>
				</select>
				<button>Submit</button>
			</form>
		</div>
	)
}
export default JoinOrgForm
