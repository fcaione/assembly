import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserCard from "../components/UserCard"

const ViewUsers = ({ user }) => {
	const [employees, setEmployees] = useState([])
	const { orgId } = useParams()

	useEffect(() => {
		getEmployees()
	}, [])

	const getEmployees = async () => {
		const res = await axios.get(`/organizations/${orgId}`)
		setEmployees(res.data.users)
		console.log(res.data.users)
	}

	return (
		employees && (
			<div>
				<h2>{employees.length} employee(s) registered</h2>
				<div className="divide-y divide-gray-200">
					{employees.map((employee) => (
						<UserCard {...employee} key={employee.user.id} userState={user}/>
					))}
				</div>
			</div>
		)
	)
}
export default ViewUsers
