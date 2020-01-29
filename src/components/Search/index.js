import React, { useState, useEffect } from "react"

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
    >
      <input type="text" name="searchQuery" onChange={handleChange} value={searchQuery} />
      <button type="submit">SUBMIT</button>
    </form>
  )
}

export default Search
