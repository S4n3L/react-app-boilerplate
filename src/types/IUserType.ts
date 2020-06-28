export interface IUserDataType {
  id: string
  firstName: string
  latsName: string
  displayName: string
  gender: string
  bio: string
  walletBalance: string
}

export interface IUserMetaType {
  tokenType?: string
  tokenId?: string
  accessTokenBody: string
}

export interface IUserType {
  data: IUserDataType
  meta: IUserMetaType
}
