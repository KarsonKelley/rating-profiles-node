const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const app = express();
require("dotenv").config();
var cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//routes

app.use('/api', userRoute);

app.get('/blog', function (req, res) {
  res.send('Hello blog, my name is Karson')
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
