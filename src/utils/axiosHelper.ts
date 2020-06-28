import { AxiosRequestConfig } from "axios"

export const axiosBaseConfig = (cookie?: string): AxiosRequestConfig => {
  if (typeof document === "undefined") {
    // SSR
    return {
      baseURL: process.env.API_URL,
      headers: { cookie: "accessTokenSignature=" + cookie || "" }
    }
  }

  // Client
  return {
    baseURL: "/api"
  }
}
