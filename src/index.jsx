import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import About from "./pages/About/index"
import Housing from "./pages/Housing/index"

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
        <Route path="/" element={ <Home /> }>
        </Route>
        <Route path="/about" element={ <About /> }>
        </Route>
        <Route path="/housing/:id" element={ <Housing /> }>
        </Route>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
