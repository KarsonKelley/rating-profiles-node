const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      pronouns: {
        type: String
      },
      genders: {
        type: String
      },
      email: {
        type: String
      },
      strength: {
        type: Number
      },
      speed: {
        type: Number
      },
      stamina: {
        type: Number
      },
      rizz: {
        type: Number
      },
      swag: {
        type: Number
      },
      magic: {
        type: Number
      },
      stealth: {
        type: Number
      },
      health: {
        type: Number
      },
      kd: {
        type: Number
      },
      rated_by: {
        type: Number
      },
      rated: {
        type: Number
      }	
    }
)