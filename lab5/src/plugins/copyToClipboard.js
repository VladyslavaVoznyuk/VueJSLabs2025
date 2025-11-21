export default {
  install(app) {
    app.config.globalProperties.$copyToClipboard = async text => {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (err) {
        return false
      }
    }
  }
}
