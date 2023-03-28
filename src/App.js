import { Route, Routes} from "react-router-dom"
import Home from "./pages/Home"

function App() {
	return (
		<div className="min-h-screen">
			<main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </main>
		</div>
	)
}

export default App
