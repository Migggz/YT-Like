import React from "react"

const SearchResultsCount = ({ count }) => (
  <span className="results-count_number">About {count.toLocaleString()} results</span>
)

export default SearchResultsCount
