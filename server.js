const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const app = express()
require("dotenv").config();

app.get('/blog', function (req, res) {
  res.send('Hello blog, my name is Karson')
})

app.get('/user', async(req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})


app.post('/user', async(req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

mongoose.set("strictQuery", false)
mongoose.connect(`mongodb+srv://${process.env.ADMIN_ID}@cluster0.pqzhos9.mongodb.net/rating-profiles-API?retryWrites=true&w=majority`)
.then(() => {
  console.log('connected to MongoDB');
  app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`);
  })
}).catch((error) => {
  console.log(error);
})