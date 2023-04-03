import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Client from "../services/auth"


const SignUp = () => {

	const navigate = useNavigate()

	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		password: "",
	})

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await Client.post("/users" , formValues)
		setFormValues({
			name: "",
			email: "",
			password: "",
		})
		navigate("/signin")
	}

	return (
    <>
		<div className="flex min-h-screen">
			<div className="flex flex-1 flex-col justify-center pb-64 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<img
							className="h-90 w-auto"
							src="https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
							alt="Your Company"
						/>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							Sign up for an account
						</h2>
					</div>

					<div className="mt-8">
						<div className="mt-6">
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Name
									</label>
									<div className="mt-2">
										<input
											id="name"
											name="name"
											type="text"
                      value={formValues.name}
											required
											className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
											onChange={handleChange}
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
                      value={formValues.email}
											required
											className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label
										htmlFor="password"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Password
									</label>
									<div className="mt-2">
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
                      value={formValues.password}
											required
											className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-center"></div>
								</div>

								<div>
									<button
										type="submit"
										className="flex w-full justify-center rounded-md bg-[#ED1C24] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
									>
										Sign up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="relative hidden w-0 flex-1 lg:block">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src="https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
					alt=""
				/>
			</div>
		</div>
    </>
	)
}

export default SignUp
