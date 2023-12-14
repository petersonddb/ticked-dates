const express = require("express")
const cors = require('cors')
const params = require('strong-params')
const app = express()
const mongoose = require('mongoose')

app.use(cors({ origin: process.env.ALLOWED_ORIGINS }))
app.use(express.json())
app.use(params.expressMiddleware())
app.use(require('./TickedDates/Controller'))
app.use(require('./ValidationErrorHandler'))

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const conn = mongoose.connection
conn.on('error', (err) => console.error(console, err))
conn.once('open', () => {
  app.listen(3000, () => {
    console.log("Server running on port 3000")
  })
})
