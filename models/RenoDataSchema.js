const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DataSchema = new Schema({
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Data = mongoose.model("users", DataSchema);