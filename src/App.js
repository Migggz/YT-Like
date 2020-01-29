import React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { SearchPage } from "./pages"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>

      <Route
        exact
        render={props => <SearchPage {...props} />}
        location={{
          pathname: "/search",
          search: "?query=:searchQuery"
        }}
      />
    </Router>
  )
}

export default App
