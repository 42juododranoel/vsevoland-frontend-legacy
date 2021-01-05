const express = require('express')
const consola = require('consola')

const app = express()

// Enable request logging
app.use(require('morgan')('combined'))

/* nuxt.js app */
app.use('/', require('./controllers/nuxt'))

/* Run express */
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host)
consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true,
})
