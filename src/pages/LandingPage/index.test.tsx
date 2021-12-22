import React from "react"
// import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import { render } from "@testing-library/react"
// import { applyMiddleware, createStore } from "redux"
// import { Provider } from "react-redux"
import "@testing-library/jest-dom/extend-expect"

import LandingPage from "./index"
import { appReducer, initialState } from "@src/store/app/reducer"

// const store = createStore(appReducer, initialState, applyMiddleware(thunk))

test("App and component rendering with router and store", () => {
  const history = createMemoryHistory()
  const { getByText } = render(<LandingPage/>)

  expect(getByText("Hello World")).toHaveTextContent("Hello World")
})
