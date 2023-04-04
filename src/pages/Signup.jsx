import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Client from "../services/auth"
import signup from "../images/signin.png"
import { Link } from "react-router-dom"


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
      <div className="flex h-screen">
        <div className="flex flex-1 flex-col justify-center pb-64 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mt-64">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex flex-col justify-center items-center">
						<img
							className=" flex h-60 w-auto"
							src={signup}
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
											className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
											className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
											className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
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
										className="flex w-full justify-center rounded-md bg-sky-900 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
									>
										Sign up
									</button>
								</div>
							</form>
							<h3 className="block text-sm font-medium leading-6 text-gray-900 mt-5">Already have an account <Link className="text-sky-900 hover:text-sky-700 hover:underline"to="/login">Log in</Link></h3>
						</div>
					</div>
				</div>
			</div>
			<div className="relative hidden w-0 flex-1 lg:block">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src="https://images.pexels.com/photos/6457515/pexels-photo-6457515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
				/>
			</div>
		</div>
    </>
	)
}

export default SignUp
