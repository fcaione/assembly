import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import { useEffect, useState } from "react"

function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    setUser({
      userId: localStorage.getItem("userId"),
      token: localStorage.getItem("token")
    })
  }, [])

	return (
		<div className="min-h-screen">
      <NavBar />
			<main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
		</div>
	)
}

export default App
