import React from "react"
// import { withRouter } from "react-router-dom"
// import { renderRoutes, RouteConfig } from "react-router-config"
// import { RouteComponentProps } from "react-router-dom"
import LandingPage from "@src/pages/LandingPage"

// import all global styles and make publicly available for the app
import style from "./App.scss"

//interface IAppProps extends RouteComponentProps {
//  route: RouteConfig
//}

const App: React.FunctionComponent = () => {
  return (
    <div className={style.app}>
      <LandingPage/>
    </div>
  )
}

export default App
