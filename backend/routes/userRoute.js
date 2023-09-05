const express = require('express');
const User = require('../models/userModel')

const router = express.Router();

router.get('/users', async(req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

router.get('/users/:id', async(req,res) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

router.post('/users', async(req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json(user);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

//update a user
router.put('/users/:id', async(req, res) => {
  try{
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    
    //we cannot find any user in database
    if(!user){
      return res.status(404).json({message: `No user found with ID ${id}`})
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);

  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

//delete a user
router.delete('/users/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user){
      return res.status(404).json({message: `cannot find any user with ID ${id}`})
    }
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({message: error.message})
  }
})


module.exports = router;
