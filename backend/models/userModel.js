const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {

      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
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
        required: true
      },
      strength: {
        type: Number,
        required: true,
        default: 0
      },
      speed: {
        type: Number,
        required: true,
        default: 0
      },
      stamina: {
        type: Number,
        required: true,
        default: 0
      },
      rizz: {
        type: Number,
        required: true,
        default: 0
      },
      swag: {
        type: Number,
        required: true,
        default: 0
      },
      magic: {
        type: Number,
        required: true,
        default: 0
      },
      stealth: {
        type: Number,
        required: true,
        default: 0
      },
      health: {
        type: Number,
        required: true,
        default: 0
      },
      kd: {
        type: Number,
        required: true,
        default: 0
      },
      rated_by: {
        type: Number,
        required: true,
        default: 0
      },
      rated: {
        type: Number,
        required: true,
        default: 0
      }	
    },
    {
      timestamps: true
    }
)


const User = mongoose.model('User', userSchema);

module.exports = User;