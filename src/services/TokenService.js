import StorageService from "./StorageService"
import { API_KEY } from "../constants"

class AuthService {
  static get storage() {
    return StorageService
  }
  static isAuthorized() {
    return Boolean(this.getToken())
  }

  static getToken() {
    return this.storage.getItem(API_KEY) || ""
  }

  static setToken(token = "") {
    this.storage.setItem(API_KEY, token)
  }

  static removeToken() {
    this.storage.removeItem(API_KEY)
  }
}

export default AuthService
