import React, { useRef } from "react"
import { WEBSITE_LINK } from "../constants"
import { TokenService } from "../services"
import { connect } from "react-redux"
import { push } from "connected-react-router"

const HomePage = props => {
  const inputEl = useRef(null)

  const submitHandler = e => {
    e.preventDefault()
    TokenService.setToken(inputEl.current.value)
    props.push("/search")
  }

  return (
    <div className="container">
      <article className="home">
        <h1 className="home-title">Youtube-Like</h1>
        <p className="home-desc">
          You should Enter your API Token,{" "}
          <a
            href="https://console.developers.google.com/apis/library?q=Youtube%20v3"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link"
          >
            From Here
          </a>
        </p>
        <form className="home-form" onSubmit={submitHandler}>
          <input ref={inputEl} type="text" name="apiToken" className="search-input" />
          <button className="results-filters home-submit" type="submit">
            Submit
          </button>
        </form>
        <p className="home-desc">OR</p>
        <a
          href={WEBSITE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="results-filters home-link"
        >
          Open Repository Link
        </a>
      </article>
    </div>
  )
}

export default connect(null, { push })(HomePage)
