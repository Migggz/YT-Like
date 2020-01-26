export default class StorageService {
  static get storage() {
    if (typeof window === "undefined") {
      throw new Error("window not found")
    } else {
      return window.localStorage
    }
  }

  static setItem(key, value = "") {
    if (!key) {
      throw new Error("Key is required.")
    }
    this.storage.setItem(key, value)
  }

  static getItem(key) {
    if (!key) {
      throw new Error("Key is required.")
    }
    return this.storage.getItem(key) || ""
  }

  static removeItem(key) {
    if (!key) {
      throw new Error("Key is required.")
    }
    this.storage.removeItem(key)
  }
}
