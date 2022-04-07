const mongoose = require('mongoose');

const ExpoSchema = new mongoose.Schema(
  {
    expoId: {
      type: String,
      required: true
    },
    auteur: {            
      type: String,
      required: true
    },
    picture: {
      type: String,                                  
    },
    prix :{
        type: Number,
    },
    likers: {
      type: [String],
      
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('expo', ExpoSchema);