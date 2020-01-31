import React, { Fragment, PureComponent } from "react"
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading-bar"
import SearchResultsCount from "../../components/SearchResultsCount"
import ResultsItem from "../../components/ResultsItem"
import Filters from "../../components/Filters"
import { searchAction } from "../../actions"
import { push } from "connected-react-router"
import { serializeParams } from "../../utils"
import Media from "react-media"
import { FaSpinner } from "react-icons/fa"

class Results extends PureComponent {
  handleURL = filters => {
    const { pathname, search } = this.props.router.location
    let newQuery = {}
    if (filters.sort === "relevance") {
      newQuery = {
        query: decodeURIComponent(this.props.router.location.query.query || "")
      }
      this.props.push(pathname + serializeParams(newQuery))
    } else {
      newQuery = {
        ...this.props.router.location.query,
        query: decodeURIComponent(this.props.router.location.query.query || ""),
        sort: filters.sort
      }
      if (pathname + search !== pathname + serializeParams(newQuery)) {
        this.props.push(pathname + serializeParams(newQuery))
      }
    }
  }

  handleFilters = filters => {
    this.handleURL(filters)
    this.props.filterResults()
  }

  render() {
    const { searchResults, isLoading, router } = this.props
    if (searchResults.length === 0 || isLoading) {
      return (
        <Media query={{ maxWidth: 576 }}>
          {matches =>
            matches ? (
              <FaSpinner className="loading-spinner" />
            ) : (
              <LoadingBar className="loading-bar" />
            )
          }
        </Media>
      )
    }
    return (
      <Fragment>
        <LoadingBar className="loading-bar" />

        <section className="results-header">
          <SearchResultsCount count={isLoading ? 0 : searchResults.pageInfo.totalResults} />
          <Filters
            onFilter={this.handleFilters}
            activeFilter={router.location.query.sort || "relevance"}
          />
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
}

const mapStateToProps = ({ searchResults, router }) => {
  return {
    router,
    searchResults: searchResults.data,
    isLoading: searchResults.isLoading,
    error: searchResults.error
  }
}

const mapDispatchToProps = {
  filterResults: searchAction,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
