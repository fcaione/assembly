import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="border-b-2 border-y-sky-500 flex flex-row gap-2 justify-end">
      <Link to="/" className="mx-4">Home</Link>
      <Link to="/signup" className="mx-4">Signup</Link>
      <Link to="/login" className="mx-4">Login</Link>
    </nav>
  )
}
export default NavBar