import StorageService from "./StorageService"
import { API_KEY, WEBSITE_LINK, API_TOKEN } from "../constants"

class AuthService {
  static get storage() {
    return StorageService
  }
  static isAuthorized() {
    return Boolean(this.getToken())
  }

  static getToken() {
    this.checkItem()
    return this.storage.getItem(API_KEY)
  }

  static checkItem() {
    if (window !== "undefined" && window.location.origin === WEBSITE_LINK) {
      this.setToken(API_TOKEN)
    }
  }

  static setToken(token = "") {
    this.storage.setItem(API_KEY, token)
  }

  static removeToken() {
    this.storage.removeItem(API_KEY)
  }
}

export default AuthService
