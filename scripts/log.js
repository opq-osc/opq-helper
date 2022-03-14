const log = (text) => console.log(`>>> ${text}`)
const pathchLog = (text) => log(`[patch]: ${text}`)

module.exports = {
  log,
  pathchLog,
}
