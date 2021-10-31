import React from "react"
import ReactDOM from "react-dom"
import routes from "@src/routes"
import thunk from "redux-thunk"
import { BrowserRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
// import { HelmetProvider } from "react-helmet-async"

import { appReducer, initialState } from "@src/store/app/reducer"

const store = createStore(appReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
const app = (
  <Provider store={store}>
    <BrowserRouter>
      {/* <HelmetProvider> */}
        <div>{renderRoutes(routes)}</div>
      {/* </HelmetProvider> */}
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
