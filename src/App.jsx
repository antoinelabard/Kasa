import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import About from "./pages/About/index"
import Housing from "./pages/Housing/index"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/housing/:id" element={<Housing />}></Route>
      </Routes>
    </Router>
  )
}

export default App
