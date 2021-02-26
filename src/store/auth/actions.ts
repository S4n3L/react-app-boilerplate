import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

import { createAction } from "@src/utils/actionHelper"
import { IAuthState } from "./state"
import { IUserType } from "@src/types"
import { IAppState } from "@src/store/app/state"

type FunctionType = (...args: any[]) => any
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType }

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>

export enum AuthActionTypes {
  LOG_IN_PENDING = "@@auth/LOG_IN_PENDING",
  LOG_IN_SUCCESS = "@@auth/LOG_IN_SUCCESS",
  LOG_IN_FAIL = "@@auth/LOG_IN_FAIL",
  LOG_OUT_PENDING = "@@auth/LOG_OUT_PENDING",
  LOG_OUT_SUCCESS = "@@auth/LOG_OUT_SUCCESS",
  LOG_OUT_FAIL = "@@auth/LOG_OUT_FAIL",
  SET_AUTH_TOKEN = "@@auth/SET_AUTH_TOKEN",
  SIGN_UP_PENDING = "@@auth/SIGN_UP_PENDING",
  SIGN_UP_SUCCESS = "@@auth/SIGN_UP_SUCCESS",
  SIGN_UP_FAIL = "@@auth/SIGN_UP_FAIL"
}


export const apiUrls = {
  login: "/oauth/token",
  loginWithToken: "/me?include=emailAddresses",
  signup: "",
}

export const authActions = {
  loginPending: () => createAction(AuthActionTypes.LOG_IN_PENDING),
  loginSuccess: (payload: IUserType) => createAction(AuthActionTypes.LOG_IN_SUCCESS, payload),
  loginFail: () => createAction(AuthActionTypes.LOG_IN_FAIL),
  logOutPending: () => createAction(AuthActionTypes.LOG_OUT_PENDING),
  logOutSuccess: () => createAction(AuthActionTypes.LOG_OUT_SUCCESS),
  logOutFail: () => createAction(AuthActionTypes.LOG_OUT_FAIL),
  setAuthToken: (payload: string) => createAction(AuthActionTypes.SET_AUTH_TOKEN, payload),
  signUpPending: () => createAction(AuthActionTypes.SIGN_UP_PENDING),
  signUpSuccess: () => createAction(AuthActionTypes.SIGN_UP_SUCCESS),
  signUpFail: () => createAction(AuthActionTypes.SIGN_UP_FAIL),
}

export type authActions = ActionsUnion<typeof authActions>

export const authActionCreators = {
  login: (userEmail: string, password: string, axiosBaseConfig: AxiosRequestConfig) => (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => IAppState): Promise<IAuthState> => {
    return new Promise((resolve, reject) => {
      dispatch(authActions.loginPending())
      const axiosConfig: AxiosRequestConfig = {
        method: "post",
        url: apiUrls.login,
        data: {
          grantType: "password",
          username: userEmail,
          password: password,
          splitToken: true
        },
        ...axiosBaseConfig
      }
      axios(axiosConfig)
        .then((res: AxiosResponse) => {
          const responseData: IUserType = res.data
          dispatch(authActions.loginSuccess( responseData ))
          resolve(getState().auth)
        })
        .catch((err) => {
          dispatch(authActions.loginFail())
          reject(err)
        })
    })
  }
}
