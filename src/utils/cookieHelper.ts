export const cookieHelper = {
  client: {
    deleteCookie(path: string, name: string): void {
      this.setCookie(path, name, "", -1000)
    },
    getCookie(name: string): string {
      if (typeof document === "undefined") {
        return null
      }
      const match = document.cookie.match(RegExp("(?:^|;\\s*)" + encodeURIComponent(name) + "=([^;]*)"))
      const cookieValue = match ? match[1] : null
      return decodeURIComponent(cookieValue)
    },
    setCookie(path: string, name: string, value: string, expiryInSec: number): void {
      if (typeof document === "undefined") {
        return
      }
      let expires = ""
      if (expiryInSec !== 0) {
        const expiryDate = new Date()
        expiryDate.setTime((new Date().getTime() + 1000 * expiryInSec))
        expires = `; expires=${expiryDate.toUTCString()}`
      }
      document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}${expires}`
    },
  },
}
