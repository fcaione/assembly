import { Link } from "react-router-dom"

const NavBar = ({ user }) => {
  console.log(user)
  return (
    <nav className="border-b-2 border-y-sky-500 flex flex-row gap-2 justify-end">
      <Link to="/" className="mx-4">Home</Link>
      {!user &&<Link to="/signup" className="mx-4">Signup</Link>}
      {!user &&<Link to="/login" className="mx-4">Login</Link>}
      {user && <Link to={`/profile/${user}`} className="mx-4">My profile</Link>}
    </nav>
  )
}
export default NavBar