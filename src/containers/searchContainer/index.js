/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import Search from "../../components/Search"
import { connect } from "react-redux"
import { searchAction } from "../../actions"
import { push } from "connected-react-router"

const SearchContainer = ({
  router: {
    location: {
      query: { query = "" }
    }
  },
  fetchResults,
  ...props
}) => {
  const [currentQuery, setCurrentQuery] = useState(query)

  const submitQuery = searchQuery => {
    setCurrentQuery(searchQuery)
    props.push(`/search?query=${searchQuery}`)
  }

  useEffect(() => {
    setCurrentQuery(query)
    fetchResults(query)
  }, [query])

  return <Search handleSubmit={submitQuery} currentQuery={decodeURIComponent(currentQuery)} />
}

const mapStateToProps = ({ searchResults, router }) => {
  return {
    router: router,
    searchResults: searchResults.data,
    isLoading: searchResults.isLoading,
    error: searchResults.error
  }
}

const mapDispatchToProps = {
  fetchResults: searchAction,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
