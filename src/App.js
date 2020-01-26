import React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { SearchPage } from "./pages"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
    </Router>
  )
}

export default App
