import React from "react"
import { withRouter } from "react-router-dom"
import { renderRoutes, RouteConfig } from "react-router-config"
import { RouteComponentProps } from "react-router-dom"

// import all global styles and make publicly available for the app
import style from "./App.scss"

interface IAppProps extends RouteComponentProps {
  route: RouteConfig
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const { route } = props
  return (
    <div className={style.app}>
      {
        renderRoutes(route.routes)
      }
    </div>
  )
}

export default withRouter(App)
