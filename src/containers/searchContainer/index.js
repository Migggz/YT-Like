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
    fetchResults(decodeURIComponent(currentQuery))
  }, [currentQuery])

  return <Search handleSubmit={submitQuery} currentQuery={decodeURIComponent(currentQuery)} />
}

const mapStateToProps = ({ router }) => {
  return {
    router: router
  }
}

const mapDispatchToProps = {
  fetchResults: searchAction,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
