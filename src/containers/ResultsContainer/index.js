import React, { Fragment } from "react"
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading-bar"
import SearchResultsCount from "../../components/searchResultsCount"
import ResultsItem from "../../components/ResultsItem"
import { MdFilterList } from "react-icons/md"

const Results = ({ searchResults, isLoading, error, router }) => {
  console.log(searchResults)

  if (searchResults.length === 0 || isLoading) {
    return <LoadingBar className="loading-bar" />
  }
  return (
    <Fragment>
      <LoadingBar className="loading-bar" />

      <section className="results-count">
        <SearchResultsCount count={isLoading ? null : searchResults.pageInfo.totalResults} />
        <button type="button" className="results-filters">
          <MdFilterList style={{ verticalAlign: "middle" }} />
          <span>Filters</span>
        </button>
      </section>

      <section className="result-content">
        <ol>
          {searchResults.items.map(el => (
            <ResultsItem
              query={router.location.query.query}
              data={el}
              key={el.snippet.title + el.etag}
            />
          ))}
        </ol>
      </section>
    </Fragment>
  )
}

const mapStateToProps = ({ searchResults, router }) => {
  return {
    router,
    searchResults: searchResults.data,
    isLoading: searchResults.isLoading,
    error: searchResults.error
  }
}

export default connect(mapStateToProps)(Results)
