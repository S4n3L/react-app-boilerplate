import produce from "immer"

import { authActions, AuthActionTypes } from "@src/store/auth/actions"
import { IAuthState } from "@src/store/auth/state"

export const initialState: IAuthState = {
  user: {
    data: null,
    meta: {
      tokenType: null,
      tokenId: null,
      accessTokenBody: null
    }
  },
  isLoginPending: false,
  isLogOutPending: false,
  isSignupPending: false,
  isLoggedIn: false,
}

export const authReducer = (state: IAuthState = initialState, action: authActions) => {
   switch (action.type) {
    case AuthActionTypes.LOG_IN_PENDING:
      return produce(state, (draftState) => {
        draftState.isLoginPending = true
      })
    case AuthActionTypes.LOG_IN_SUCCESS:
      return produce(state, (draftState) => {
        draftState.user = action.payload
        draftState.isLoginPending = false
        draftState.isLoggedIn = true
      })
    case AuthActionTypes.LOG_IN_FAIL:
      return produce(state, (draftState) => {
        draftState.user = null
        draftState.isLoginPending = false
        draftState.isLoggedIn = false
      })

    case AuthActionTypes.LOG_OUT_PENDING:
      return produce(state, (draftState) => {
        draftState.isLogOutPending = true
      })
    case AuthActionTypes.LOG_OUT_SUCCESS:
      return produce(state, (draftState) => {
        draftState.user = null
        draftState.isLogOutPending = false
        draftState.isLoggedIn = false
      })
    case AuthActionTypes.LOG_OUT_FAIL:
      return produce(state, (draftState) => {
        draftState.isLogOutPending = false
      })

    case AuthActionTypes.SET_AUTH_TOKEN:
      return produce(state, (draftState) => {
        draftState.user.meta.accessTokenBody = action.payload
      })

    case AuthActionTypes.SIGN_UP_PENDING:
      return produce(state, (draftState) => {
        draftState.isSignupPending = true
      })
    case AuthActionTypes.SIGN_UP_FAIL:
    case AuthActionTypes.SIGN_UP_SUCCESS:
      return produce(state, (draftState) => {
        draftState.isSignupPending = false
      })
    default:
      return state
  }
}
