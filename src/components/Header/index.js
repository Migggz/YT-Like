import React from "react"
import Logo from "../Logo"
import { SearchContainer } from "../../containers"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Logo />
          <SearchContainer />
        </div>
      </div>
    </header>
  )
}

export default Header
