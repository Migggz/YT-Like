import React, { useState, useEffect, useRef } from "react"
import { IoIosSearch } from "react-icons/io"
import Media from "react-media"

const Search = ({ handleSubmit, currentQuery }) => {
  const [searchQuery, setSearchQuery] = useState(currentQuery)
  const inputEl = useRef(null)

  const handleChange = event => setSearchQuery(event.target.value)
  useEffect(() => setSearchQuery(currentQuery), [currentQuery])

  const handleMobileClick = () => {
    inputEl.current.focus()
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        handleSubmit(searchQuery)
      }}
      className="search-form"
    >
      <input
        ref={inputEl}
        className="search-input"
        type="text"
        name="searchQuery"
        onChange={handleChange}
        value={searchQuery}
      />
      <Media query="(max-width: 576px)">
        {matches =>
          matches ? (
            <button className="search-submit" type="button" onClick={handleMobileClick}>
              <IoIosSearch style={{ verticalAlign: "middle" }} />
            </button>
          ) : (
            <button className="search-submit" type="submit">
              <IoIosSearch style={{ verticalAlign: "middle" }} />
            </button>
          )
        }
      </Media>
    </form>
  )
}

export default Search
