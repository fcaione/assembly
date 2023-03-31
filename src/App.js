import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import { useEffect, useState } from "react"
import ViewUsers from "./pages/ViewUsers"

function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(
      localStorage.getItem("userId"),
    )
  }, [])

	return (
		<div className="min-h-screen">
      <NavBar />
			<main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/organization/:orgId" element={<ViewUsers user={user}/>} />
        </Routes>
      </main>
		</div>
	)
}

export default App
