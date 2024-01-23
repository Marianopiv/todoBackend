const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const { router } = require('./routes/index.js')
app.use(bodyParser.json());
app.use('/api', router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
