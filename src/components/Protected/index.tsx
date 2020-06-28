import React, { useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import { useSelector } from "react-redux"

import { IAppState } from "@src/store/app/state"


interface IProtectedPage {
  page: React.FunctionComponent
  layout?: React.FunctionComponent
}

type TProtectedProps = IProtectedPage & RouteComponentProps

const Protected: React.FunctionComponent<TProtectedProps> = (props) => {
  const { page: Page, layout: Layout } = props
  const isUserLoggedIn = useSelector((state: IAppState) => state.auth.isLoggedIn)

  useEffect(() => {
    if (!isUserLoggedIn) {
      props.history.push("/login")
    }
  }, [isUserLoggedIn])

  if (Layout) {
    return (
      <Layout>
        <Page { ...props }/>
      </Layout>
    )
  } else {
    return <Page { ...props }/>
  }
}

const protect = (page: any, layout?: any) => {
  return (props: any) => <Protected layout={layout} page={page} { ...props }/>
}

export default protect

