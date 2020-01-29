import React from "react"
import Logo from "../Logo"
import { SearchContainer } from "../../containers"

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Logo />
        <SearchContainer />
      </div>
    </header>
  )
}

export default Header
