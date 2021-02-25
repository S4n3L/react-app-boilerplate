import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"

import style from "./LandingPage.scss"

type LandingPageProps = RouteComponentProps

const LandingPage: React.FunctionComponent<LandingPageProps> = () => {
  return (
    <div>Landing page</div>
  )
}

export default withRouter(LandingPage)

