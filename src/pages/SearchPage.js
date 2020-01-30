import React, { Fragment } from "react"
import Header from "../components/Header"
import Results from "../containers/ResultsContainer"

const SearchPage = () => {
  return (
    <Fragment>
      <Header />
      <main className="results">
        <div className="container">
          <Results />
        </div>
      </main>
    </Fragment>
  )
}

export default SearchPage
