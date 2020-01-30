import React, { useState, useEffect } from "react"
import { IoIosSearch } from "react-icons/io"
const Search = ({ handleSubmit, currentQuery }) => {
  const [searchQuery, setSearchQuery] = useState(currentQuery)

  const handleChange = event => setSearchQuery(event.target.value)
  useEffect(() => setSearchQuery(currentQuery), [currentQuery])

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit(searchQuery)
      }}
      className="search-form"
    >
      <input
        className="search-input"
        type="text"
        name="searchQuery"
        onChange={handleChange}
        value={searchQuery}
      />
      <button className="search-submit" type="submit">
        <IoIosSearch style={{ verticalAlign: "middle" }} />
      </button>
    </form>
  )
}

export default Search
