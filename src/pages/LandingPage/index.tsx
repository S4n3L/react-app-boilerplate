import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"

import style from "./LandingPage.scss"

type LandingPageProps = RouteComponentProps

const LandingPage: React.FunctionComponent<LandingPageProps> = () => {
  return (
    <div className={style.landingPage}>Landing page4</div>
  )
}

export default withRouter(LandingPage)

