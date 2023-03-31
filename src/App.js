import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import { useEffect, useState } from "react"
import ViewUsers from "./pages/ViewUsers"
import ProfileDetails from "./pages/ProfileDetails"
import axios from "axios"

function App() {

  const [user, setUser] = useState(null)

  const getUser = async () => {
    if (localStorage.getItem("userId")){
      const res = await axios.get(`/users/${localStorage.getItem("userId")}`)
      setUser(res.data)
    }
  }

  useEffect(() => {
    getUser()
    console.log(user)
  }, [])

	return (
		<div className="min-h-screen">
      <NavBar user={user}/>
			<main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/organization/:orgId" element={<ViewUsers user={user}/>} />
          <Route path="/profile/:userId" element={<ProfileDetails user={user}/>} />
        </Routes>
      </main>
		</div>
	)
}

export default App
