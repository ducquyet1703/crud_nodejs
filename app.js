const express = require('express')

const app = express()
const port = 3000

// database 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')



app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})