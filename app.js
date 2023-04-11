if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')

require('./database/models')

app.use(routes)
app.listen(port, () => console.log(`the server is listening on ${port}`))
