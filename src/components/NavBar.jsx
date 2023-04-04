import { Link, useNavigate } from "react-router-dom"
import handshake from "../images/handshake.png"

const NavBar = ({ user, setUser }) => {
	const navigate = useNavigate()

	return (
		<>
			<header aria-label="Site Header" className="bg-white">
				<div className="mx-auto flex h-16 max-w-screen items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-lg">
					<Link className="block text-sky-900" to="/">
						<span className="sr-only">Home</span>
						<div className="w-24 h-24 absolute top-2">
							<img
								src={handshake}
								alt="two hands shaking"
								className="object-cover"
							/>
						</div>
					</Link>

					<div className="flex flex-1 items-center justify-end md:justify-between">
						<nav aria-label="Site Nav" className="hidden md:block">
							<ul className="flex items-center gap-6 text-sm">
								<li>
									<Link
										className="text-gray-500 transition hover:text-gray-500/75 ml-20"
										to="/about"
									>
										About
									</Link>
								</li>
							</ul>
						</nav>

						<div className="flex items-center gap-4">
							{user ? (
								<div className="flex flex-row gap-4 ml-20">
									<Link
										className="block rounded-md bg-sky-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
										to={`/profile/${user.id}`}
									>
										My Profile
									</Link>
									<button
										className="block rounded-md bg-sky-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
										onClick={() => {
											localStorage.clear()
											setUser(null)
											navigate("/")
										}}
									>
										Sign out
									</button>
								</div>
							) : (
								<div className="flex flex-row gap-4 ml-20">
									<Link
										className="block rounded-md bg-sky-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-800"
										to="/login"
									>
										Login
									</Link>

									<Link
										className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-900 transition hover:text-sky-800/75 sm:block"
										to="/signup"
									>
										Register
									</Link>
								</div>
							)}

							<button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
								<span className="sr-only">Toggle menu</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
export default NavBar
