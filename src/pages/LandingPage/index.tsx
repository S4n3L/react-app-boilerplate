import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"

import style from "./LandingPage.scss"

type LandingPageProps = RouteComponentProps

const LandingPage: React.FunctionComponent<LandingPageProps> = () => {
  return (
    <div className={`${style.landingPage} ${style.flexible}`}>Landing page4
      <div>a</div>
      <div>b</div>
    </div>
  )
}

export default withRouter(LandingPage)

