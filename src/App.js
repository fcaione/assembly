import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import { useEffect, useState } from "react"
import ViewUsers from "./pages/ViewUsers"
import ProfileDetails from "./pages/ProfileDetails"
import Client from "./services/auth"

function App() {

  const [user, setUser] = useState(null)

  const getUser = async () => {
    if (localStorage.getItem("userId")){
      const res = await Client.get(`/users/${localStorage.getItem("userId")}`)
      setUser(res.data)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

	return (
		<div>
      <NavBar user={user} setUser={setUser}/>
			<main>
        <Routes>
          <Route path="/" element={<Home user={user} getUser={getUser}/>} />
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
