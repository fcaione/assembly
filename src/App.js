import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"

function App() {
	return (
		<div className="min-h-screen">
      <NavBar />
			<main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </main>
		</div>
	)
}

export default App
