import React, { Fragment } from "react"
import Header from "../components/Header"
import { API_TOKEN } from "../constants"
const SearchPage = () => {
  console.log(API_TOKEN)
  return (
    <Fragment>
      <Header />
      <main>Main</main>
    </Fragment>
  )
}

export default SearchPage
