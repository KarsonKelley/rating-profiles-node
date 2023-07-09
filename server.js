const express = require('express')
const mongoose = require('mongoose')
const app = express()
require("dotenv").config();

app.get('/', function (req, res) {
  res.send('hello world')
})



mongoose.connect(`mongodb+srv://${process.env.ADMIN_ID}@cluster0.pqzhos9.mongodb.net/rating-profiles-API?retryWrites=true&w=majority`)
.then(() => {
  console.log('connected to MongoDB')
  app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`)
  })
}).catch((error) => {
  console.log(error)
})