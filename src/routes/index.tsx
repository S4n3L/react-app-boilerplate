import { RouteConfig } from "react-router-config"

import App from "@src/components/App/App"
import protect from "@src/components/Protected"
import LandingPage from "@src/pages/LandingPage"

export enum ERoutes {
  HOME = "/"
}

const routes: RouteConfig[] = [{
  path: "/",
  component: App,
  routes: [
    {
      path: "/",
      component: LandingPage,
      exact: true,
    }
/*     {
      // component: "NotFoundPage",  // 404: Ha itt nincs megadva path, akkor minden nem találtra ezt adja (ez nem nest!)
    }, */
  ],
}]

export default routes
