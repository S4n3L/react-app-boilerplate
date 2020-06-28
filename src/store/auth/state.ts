import { IUserType } from "@src/types"

export interface IAuthState {
  user: IUserType
  isLoginPending: boolean
  isLogOutPending: boolean
  isSignupPending: boolean
  isLoggedIn: boolean
}
