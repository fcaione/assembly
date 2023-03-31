import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UserCard from "../components/UserCard"

const ViewUsers = ({ user }) => {
	const [employees, setEmployees] = useState([])
  const [selectedOrg, setSelectedOrg] = useState({})
	const { orgId } = useParams()

  console.log(user)

	useEffect(() => {
		getEmployees()
	}, [])

	const getEmployees = async () => {
		const res = await axios.get(`/organizations/${orgId}`)
		setEmployees(res.data.users)
    setSelectedOrg(res.data)
	}

	return (
		employees && (
			<div>
				<h2 className="text-center mt-10 font-semibold text-xl">{employees.length} employee(s) registered at {selectedOrg.name}</h2>
				<div className="divide-y divide-gray-200 m-10">
					{employees.map((employee) => (
						<UserCard {...employee} key={employee.user.id} userState={user}/>
					))}
				</div>
			</div>
		)
	)
}
export default ViewUsers
