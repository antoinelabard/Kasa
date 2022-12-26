import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/404">
                <NotFound />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/housing/:id">
                <Housing />
            </Route>
        </Router>
    </React.StrictMode>
)