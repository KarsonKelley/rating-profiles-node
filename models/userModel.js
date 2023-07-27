const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
      first_name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: true
      },
      pronouns: {
        type: String,
        required: false
      },
      genders: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      strength: {
        type: Number,
        required: true
      },
      speed: {
        type: Number,
        required: true
      },
      stamina: {
        type: Number,
        required: true
      },
      rizz: {
        type: Number,
        required: true
      },
      swag: {
        type: Number,
        required: true
      },
      magic: {
        type: Number
      },
      stealth: {
        type: Number,
        required: true
      },
      health: {
        type: Number,
        required: true
      },
      kd: {
        type: Number,
        required: true
      },
      rated_by: {
        type: Number,
        required: true
      },
      rated: {
        type: Number,
        required: true
      }	
    },
    {
      timestamps: true
    }
)


const User = mongoose.model('User', userSchema);

module.exports = User;