import React from "react"
import { WEBSITE_NAME } from "../../constants"
import YT_Logo from "../../assets/images/YouTube_Logo_2017.svg"
import YT_Logo_Light from "../../assets/images/YouTube_light.svg"
import Media from "react-media"

export default () => (
  <Media query={{ maxWidth: 576 }}>
    {matches =>
      matches ? (
        <img src={YT_Logo_Light} alt={WEBSITE_NAME} className="logo" />
      ) : (
        <img src={YT_Logo} alt={WEBSITE_NAME} className="logo" />
      )
    }
  </Media>
)
