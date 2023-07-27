const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
      first_name: {
        type: String,
        required: false
      },
      last_name: {
        type: String,
        required: false
      },
      pronouns: {
        type: String,
        required: false
      },
      genders: {
        type: String,
        required: false
      },
      email: {
        type: String,
        required: false
      },
      strength: {
        type: Number,
        required: false,
        default: 0
      },
      speed: {
        type: Number,
        required: false,
        default: 0
      },
      stamina: {
        type: Number,
        required: false,
        default: 0
      },
      rizz: {
        type: Number,
        required: false,
        default: 0
      },
      swag: {
        type: Number,
        required: false,
        default: 0
      },
      magic: {
        type: Number,
        required: false,
        default: 0
      },
      stealth: {
        type: Number,
        required: false,
        default: 0
      },
      health: {
        type: Number,
        required: false,
        default: 0
      },
      kd: {
        type: Number,
        required: false,
        default: 0
      },
      rated_by: {
        type: Number,
        required: false,
        default: 0
      },
      rated: {
        type: Number,
        required: false,
        default: 0
      }	
    },
    {
      timestamps: false
    }
)


const User = mongoose.model('User', userSchema);

module.exports = User;