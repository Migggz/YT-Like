import React from "react"
import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom"
import { SearchPage, HomePage } from "./pages"
import { TokenService } from "./services"
import { connect } from "react-redux"

function App() {
  return (
    <Router>
      <Route
        exact
        path="/search"
        render={props =>
          TokenService.isAuthorized() ? <SearchPage {...props} /> : <Redirect to="/" />
        }
        location={{
          pathname: "/search",
          search: "?query=:searchQuery"
        }}
      />

      <Route
        exact
        path="/"
        render={props =>
          TokenService.isAuthorized() ? <Redirect to="/search" /> : <HomePage {...props} />
        }
      ></Route>
    </Router>
  )
}

export default connect()(withRouter(App))
