import { combineReducers } from "redux"
import { IAppState } from "@src/store/app/state"
import { initialState as authInitialState, authReducer } from "@src/store/auth/reducer"

export const initialState: IAppState = {
  auth: authInitialState,
}

export const appReducer = combineReducers({
  auth: authReducer,
})
