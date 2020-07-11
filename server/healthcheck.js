/* Simple node.js healthcheck tool.
 *
 * Usage:
 *  node /healthcheck.js HOST PORT PATH CODE
 *
 * e.g.
 *  node /healthcheck.js testhost.my.compoany 3000 / 200
 *
 * Connection always goes to localhost
 *
 */
const http = require('http')
const consola = require('consola')

const [host, port, path, code] = process.argv.slice(2)

const options = {
  timeout: 1000,
  host,
  port,
  path,
  headers: {
    host,
  },
}

const request = http.request(options, (res) => {
  consola.info('HEALTHCHECK STATUS: ', res.statusCode)
  process.exitCode = res.statusCode === code ? 0 : 1
  process.exit()
})

request.on('error', (err) => {
  consola.error('HEALTHCHECK ERROR', err)
  process.exit(1)
})

request.end()
